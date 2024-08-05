import { Component } from '@angular/core';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';
import { MermaService } from '../../services/merma.service'; // Importa el servicio
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponenteDecreaseRequest } from '../../interfaces/component-decrease';
import { LampDecreaseRequest } from '../../interfaces/lamp-decrease';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private inventarioService: InventarioService,
    private mermaService: MermaService,
    private matSnackBar: MatSnackBar
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
      (document.getElementById('inventariolamparaId') as HTMLInputElement).value = id.toString();
    } else if (tipo === 'componente') {
      (document.getElementById('inventarioComponenteId') as HTMLInputElement).value = id.toString();
    }
  }

  mermarLampara() {
    const cantidad = (document.getElementById('cantidadLampara') as HTMLInputElement).value;
    const descripcion = (document.getElementById('descripcionLampara') as HTMLTextAreaElement).value;
    const id = (document.getElementById('inventariolamparaId') as HTMLInputElement).value;

    const requestData: LampDecreaseRequest = {
      cantidad: +cantidad,
      descripcion: descripcion,
      inventariolamparaId: +id,
    };

    this.mermaService.sendMermaLamparas(requestData).subscribe({
      next: (response) => {
        console.log('Respuesta de merma lámpara:', response);
        this.limpiarModal();
        this.obtenerInventarioLamparas();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      },
      error: (err) => {
        console.log('Error al mermar lámpara:', err);
        this.matSnackBar.open('Ocurrió un problema: ' + (err.error.message || 'Desconocido'), 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      },
    });
  }

  mermarComponente() {
    const cantidad = (document.getElementById('cantidadComponente') as HTMLInputElement).value;
    const descripcion = (document.getElementById('descripcionComponente') as HTMLTextAreaElement).value;
    const id = (document.getElementById('inventarioComponenteId') as HTMLInputElement).value;

    const requestData: ComponenteDecreaseRequest = {
      cantidad: +cantidad,
      descripcion: descripcion,
      inventarioComponenteId: +id,
    };

    this.mermaService.sendMermaComponentes(requestData).subscribe({
      next: (response) => {
        console.log('Respuesta de merma componente:', response);
        this.limpiarModal();
        this.obtenerInventarioComponentes();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      },
      error: (err) => {
        console.log('Error al mermar componente:', err);
        this.matSnackBar.open('Ocurrió un problema: ' + (err.error.message || 'Desconocido'), 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      },
    });
  }

  selectLamp(lamp: any) {
    this.selectedLamp = lamp;
  }

  selectComponent(component: any) {
    this.selectedComponent = component;
  }

  limpiarModal() {
    (document.getElementById('cantidadLampara') as HTMLInputElement).value = '';
    (document.getElementById('descripcionLampara') as HTMLTextAreaElement).value = '';
    (document.getElementById('inventariolamparaId') as HTMLInputElement).value = '';

    (document.getElementById('cantidadComponente') as HTMLInputElement).value = '';
    (document.getElementById('descripcionComponente') as HTMLTextAreaElement).value = '';
    (document.getElementById('inventarioComponenteId') as HTMLInputElement).value = '';
  }
}
