import { Component, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';
import { MermaService } from '../../services/merma.service';
import { ComponenteDecreaseRequest } from '../../interfaces/component-decrease';
import { LampDecreaseRequest } from '../../interfaces/lamp-decrease';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Table } from 'primeng/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-administracion-inventario',
  templateUrl: './administracion-inventario.component.html',
  styleUrls: ['./administracion-inventario.component.css'],
})
export class AdministracionInventarioComponent {
  componentesInventory: ComponentInventory[] = [];
  lampsInventory: LampInventory[] = [];

  cargando: boolean = true;
  inventarioId!: number;
  tipoInventario!: string;

  selectedLamp: any = {};
  selectedComponent: any = {};
  @ViewChild('dtInventarioLamparas') dtInventarioLamparas!: Table;
  @ViewChild('dtInventarioComponentes') dtInventarioComponentes!: Table;

  constructor(
    private inventarioService: InventarioService,
    private mermaService: MermaService,
    private matSnackBar: MatSnackBar,
    private modalService: NgbModal
  ) {
    this.obtenerInventarioComponentes();
    this.obtenerInventarioLamparas();
  }

  obtenerInventarioLamparas() {
    this.cargando = true;
    this.inventarioService.getInventarioLampara().subscribe({
      next: (data) => {
        this.lampsInventory = data;
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

  obtenerInventarioComponentes() {
    this.inventarioService.getInventarioComponente().subscribe({
      next: (data) => {
        this.componentesInventory = data;
        
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  setInventarioId(id: number, tipo: string) {
    this.inventarioId = id;
    this.tipoInventario = tipo;
    if (tipo === 'lampara') {
      this.selectedLamp.id = id;
    } else if (tipo === 'componente') {
      this.selectedComponent.id = id;
    }
  }


  openMermarLamparaModal(content: TemplateRef<any>, lamp: any) {
    this.selectedLamp = lamp;
    this.modalService.open(content, {
      ariaLabelledBy: 'mermarLamparaModal',
    });
  }

  openMermarComponenteModal(content: TemplateRef<any>, component: any) {
    this.selectedComponent = component;
    this.modalService.open(content, {
      ariaLabelledBy: 'mermarComponenteModal',
    });
  }

  mermarLampara() {
    const requestData: LampDecreaseRequest = {
      cantidad: this.selectedLamp.cantidad,
      descripcion: this.selectedLamp.descripcion,
      inventariolamparaId: this.selectedLamp.id,
    };

    this.mermaService.sendMermaLamparas(requestData).subscribe({
      next: (response) => {
        console.log('Respuesta de merma lámpara:', response);
        //this.limpiarModal();
        this.modalService.dismissAll();
        this.obtenerInventarioLamparas();
        this.matSnackBar.open('Lamparas mermadas correctamente', 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (err) => {
        console.log('Error al mermar lámpara:', err);
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

  mermarComponente() {
    const requestData: ComponenteDecreaseRequest = {
      cantidad: this.selectedComponent.cantidad,
      descripcion: this.selectedComponent.descripcion,
      inventarioComponenteId: this.selectedComponent.id,
    };

    this.mermaService.sendMermaComponentes(requestData).subscribe({
      next: (response) => {
        console.log('Respuesta de merma componente:', response);
        //this.limpiarModal();
        this.modalService.dismissAll();
        this.obtenerInventarioComponentes();
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

  selectLamp(lamp: any) {
    this.selectedLamp = lamp;
  }

  selectComponent(component: any) {
    this.selectedComponent = component;
  }

  cerrarModal() {
    this.modalService.dismissAll();
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtInventarioLamparas' && this.dtInventarioLamparas) {
      this.dtInventarioLamparas.filterGlobal(filterValue, 'contains');
    } else if (
      tableId === 'dtInventarioComponentes' &&
      this.dtInventarioComponentes
    ) {
      this.dtInventarioComponentes.filterGlobal(filterValue, 'contains');
    }
  }
}
