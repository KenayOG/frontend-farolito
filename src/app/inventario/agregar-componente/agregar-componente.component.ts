import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ComponentesService } from '../../services/componentes.service';
import { Componente, ComponenteRequest } from '../../interfaces/components';
import { Table } from 'primeng/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css'],
})
export class AgregarComponenteComponent {
  componenteForm: FormGroup;
  componenteEditForm: FormGroup;
  catalogoComponentes: Componente[] = [];
  selectedComponente: Componente | null = null;
  componenteIdTemp: number | null = null;
  nuevoEstatusTemp: boolean = false;

  @ViewChild('dtCatalogoComponentes') dtCatalogoComponentes!: Table;
  cargando: boolean = true;

  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private componentesService: ComponentesService,
    private modalService: NgbModal
  ) {
    this.componenteForm = this.fb.group({
      nombre: ['', Validators.required],
    });
    this.componenteEditForm = this.fb.group({
      nombre: ['', Validators.required],
    });
    this.obtenerComponentes();
  }

  obtenerComponentes() {
    this.cargando = true;
    this.componentesService.getCatalogoComponentes().subscribe({
      next: (data) => {
        //this.catalogoComponentes = data; // -- todos los componentes
        /* Componentes con estatus true solamente */
        this.catalogoComponentes = data.filter(
          (catalogo) => catalogo.estatus === true
        );
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  createComponente() {
    if (this.componenteForm.valid) {
      const nombreValue = this.componenteForm.get('nombre')?.value;

      if (nombreValue) {
        const componenteData: ComponenteRequest = {
          id: 0,
          nombre: nombreValue,
        };
        this.componentesService.createComponente(componenteData).subscribe({
          next: (response) => {
            this.matSnackBar.open(response.message, 'Cerrar', {
              duration: 3000,
            });
            this.router.navigate(['/inventario']);
          },
          error: (err) => {
            this.matSnackBar.open('Error al agregar el componente', 'Cerrar', {
              duration: 3000,
            });
            console.error('Error:', err);
          },
        });
      }
    }
  }

  selectComponente(componente: Componente) {
    this.selectedComponente = componente;
    console.log(this.selectedComponente);
    this.componenteEditForm.patchValue(componente);
    this.matSnackBar.open(
      'Datos cargados en el formulario para su edicion',
      'Cerrar',
      {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      }
    );
  }

  editarComponente() {
    if (this.componenteEditForm.invalid) {
      return;
    }
    const componente: Componente = {
      ...this.selectedComponente,
      ...this.componenteEditForm.value,
    };
    this.componentesService.updateComponente(componente).subscribe(
      (respone) => {
        this.obtenerComponentes();
        this.selectedComponente = null;
        this.componenteEditForm.reset();
        this.matSnackBar.open('Componente actualizado correctamente', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  advertenciaEstatus(
    content: TemplateRef<any>,
    id: number,
    estatus: boolean
  ): void {
    this.componenteIdTemp = id;
    this.nuevoEstatusTemp = estatus;
    this.modalService.open(content, {
      ariaLabelledBy: 'modalEstatusComponente',
    });
  }

  actualizarEstatusComponente() {
    if (this.componenteIdTemp !== null && this.nuevoEstatusTemp != null) {
      const componente = this.catalogoComponentes.find(
        (p) => p.id === this.componenteIdTemp
      );
      if (componente) {
        this.componentesService
          .updateEstatusComponente(this.componenteIdTemp, this.nuevoEstatusTemp)
          .subscribe({
            next: () => {
              componente.estatus = this.nuevoEstatusTemp;
              this.modalService.dismissAll();
              this.matSnackBar.open(
                'Componente eliminado exitosamente',
                'Cerrar',
                {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                }
              );
              this.obtenerComponentes();
            },
            error: (error) => {
              console.error('Error al eliminar el componente', error);
              this.modalService.dismissAll();
              this.matSnackBar.open(
                'Error al eliminar el componente',
                'Cerrar',
                {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                }
              );
            },
          });
      }
    }
  }

  cancelarActualizacion() {
    this.modalService.dismissAll();
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtCatalogoComponentes' && this.dtCatalogoComponentes) {
      this.dtCatalogoComponentes.filterGlobal(filterValue, 'contains');
    }
  }
}
