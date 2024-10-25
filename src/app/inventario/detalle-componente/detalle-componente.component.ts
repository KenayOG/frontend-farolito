import { Component, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetail } from '../../interfaces/component-detail';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { InventarioService } from '../../services/inventario.service';
import { Table } from 'primeng/table';
import { ComponenteDecreaseRequest } from '../../interfaces/component-decrease';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MermaService } from '../../services/merma.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css',
})
export class DetalleComponenteComponent {
  componentDetail: ComponentInventory | undefined;
  nombreComponente: string = '';
  cargando: boolean = true;
  selectedComponent: any = {};
  @ViewChild('dtDetalleComponentes') dtDetalleComponentes!: Table;

  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioService,
    private matSnackBar: MatSnackBar,
    private modalService: NgbModal,
    private mermaService: MermaService
  ) {
    this.obtenerDetalleComponente();
  }

  obtenerDetalleComponente() {
    this.cargando = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.inventarioService.getComponentePorId(id).subscribe(
      (component) => {
        if (component?.detalles) {
          // Filtrar los detalles para mostrar solo aquellos con cantidad > 0
          component.detalles = component.detalles.filter(
            (detalle) => detalle.cantidad > 0
          );
        }
        this.componentDetail = component;
        this.nombreComponente =
          this.componentDetail?.nombre || 'Nombre del Componente no encontrado';

        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      (error) => {
        console.error('Error al obtener el detalle del componente', error);

        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      }
    );
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtDetalleComponentes' && this.dtDetalleComponentes) {
      this.dtDetalleComponentes.filterGlobal(filterValue, 'contains');
    }
  }

  openMermarComponenteModal(content: TemplateRef<any>, detail: any) {
    this.selectedComponent = detail;
    this.modalService.open(content, {
      ariaLabelledBy: 'mermarComponenteModal',
    });
  }

  mermarComponente() {
    const requestData: ComponenteDecreaseRequest = {
      cantidad: this.selectedComponent.cantidadd,
      descripcion: this.selectedComponent.descripcion,
      inventarioComponenteId: this.selectedComponent.id,
    };

    this.mermaService.sendMermaComponentes(requestData).subscribe({
      next: (response) => {
        console.log('Respuesta de merma componente:', response);
        //this.limpiarModal();
        this.modalService.dismissAll();
        this.obtenerDetalleComponente();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (err) => {
        console.log('Error al mermar componente:', err);
        this.modalService.dismissAll();
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      },
    });
  }

  validateInput(event: KeyboardEvent) {
    const inputChar = event.key;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(inputChar)) {
      event.preventDefault();
    }
  }
}
