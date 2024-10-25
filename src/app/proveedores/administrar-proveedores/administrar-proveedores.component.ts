import { Component, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Provider } from '../../interfaces/provider';
import { ProveedoresService } from '../../services/proveedores.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-administrar-proveedores',
  templateUrl: './administrar-proveedores.component.html',
  styleUrl: './administrar-proveedores.component.css',
})
export class AdministrarProveedoresComponent {
  providers: Provider[] = [];
  cargando: boolean = true;
  proveedorIdTemp: number | null = null;
  nuevoEstatusTemp: boolean = false;
  @ViewChild('dtProveedores') dtProveedores!: Table;

  constructor(
    private proveedoresService: ProveedoresService,
    private router: Router,
    private matSnackbar: MatSnackBar,
    private modalService: NgbModal
  ) {
    this.obtenerProveedor();
  }

  obtenerProveedor() {
    this.cargando = true;
    this.proveedoresService.getProveedores().subscribe({
      next: (data) => {
        //this.providers = data; //-- todos los provedores
        this.providers = data.filter((provider) => provider.estatus === true);
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

  selectProvider(provider: Provider) {
    localStorage.setItem('selectedProvider', JSON.stringify(provider));
    this.router.navigate(['/editar-proveedor']);
  }

  advertenciaEstatus(
    content: TemplateRef<any>,
    id: number,
    estatus: boolean
  ): void {
    this.proveedorIdTemp = id;
    this.nuevoEstatusTemp = estatus;
    this.modalService.open(content, {
      ariaLabelledBy: 'modalEstatusProveedor',
    });
  }

  actualizarEstatusProveedor() {
    if (this.proveedorIdTemp !== null && this.nuevoEstatusTemp !== null) {
      const proveedor = this.providers.find(
        (p) => p.id === this.proveedorIdTemp
      );
      if (proveedor) {
        this.proveedoresService
          .updateEstatusProveedor(this.proveedorIdTemp, this.nuevoEstatusTemp)
          .subscribe({
            next: () => {
              proveedor.estatus = this.nuevoEstatusTemp;
              this.modalService.dismissAll();
              this.matSnackbar.open(
                'Proveedor eliminado exitosamente',
                'Cerrar',
                {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center',
                }
              );
              this.obtenerProveedor();
            },
            error: (error) => {
              console.error('Error al eliminar el proveedor', error);
              this.modalService.dismissAll();
              this.matSnackbar.open(
                'Error al eliminar el proveedor',
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
    if (tableId === 'dtProveedores' && this.dtProveedores) {
      this.dtProveedores.filterGlobal(filterValue, 'contains');
    }
  }

  validateInput(event: KeyboardEvent) {
    const inputChar = event.key;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(inputChar)) {
      event.preventDefault();
    }
  }
}
