import { Component, ViewChild, ElementRef } from '@angular/core';
import { Production, ProductionHechas, ProductionSteps } from '../../interfaces/production';
import { ProduccionService } from '../../services/produccion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeProduction } from '../../interfaces/recipe-production';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pedidos-produccion',
  templateUrl: './pedidos-produccion.component.html',
  styleUrl: './pedidos-produccion.component.css',
})
export class PedidosProduccionComponent {
  solicitudesProduccion: Production[] = [];
  produccionesCompletadas: ProductionHechas[] = [];
  producciones: ProductionSteps[] = [];
  cargando: boolean = true;

  @ViewChild('dtSolicitudesProduccion') dtSolicitudesProduccion!: Table;
  @ViewChild('dtProduccionesHechas') dtProduccionesHechas!: Table;
  @ViewChild('dtProducciones') dtProducciones!: Table;

  constructor(
    private produccionService: ProduccionService,
    private matSnackBar: MatSnackBar
  ) {
    this.obtenerSolicitudesProduccion();
    this.obtenerProduccionesHechas();
    this.obtenerProducciones();
  }

  obtenerSolicitudesProduccion() {
    this.cargando = true;
    this.produccionService.getSolicitudesProduccion().subscribe({
      next: (data) => {
        this.solicitudesProduccion = data;
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

  obtenerProduccionesHechas() {
    this.produccionService.getCargarProduccionesHechas().subscribe({
      next: (data) => {
        this.produccionesCompletadas = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  obtenerProducciones() {
    this.produccionService.getCargarProducciones().subscribe({
      next: (data) => {
        this.producciones = data.filter(produccion => 
          ['Rechazada', 'Autorizada', 'Soldando', 'Armando', 'Calidad'].includes(produccion.solicitudProduccion.estatus)
        );
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  aprobarSolicitud(id: number) {
    this.cargando = true;
    this.produccionService.approveSolicitude(id).subscribe({
      next: (response) => {
        console.log('Solicitud aprobada:', response);
        this.obtenerSolicitudesProduccion();
        this.obtenerProducciones();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
        });
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (err) => {
        console.log(err);
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
          }
        );
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  updateSolicitude(id: number) {
    this.cargando = true;
    this.produccionService.updateSolicitude(id).subscribe({
      next: (response) => {
        console.log('Solicitud actualizada:', response);
        this.obtenerProducciones();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
        });
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (err) => {
        console.log(err);
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
          }
        );
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  finishSolicitude(id: number) {
    this.cargando = true;
    this.produccionService.finishSolicitude(id).subscribe({
      next: (response) => {
        console.log('Producción finalizada:', response);
        this.obtenerProducciones();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
        });
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (err) => {
        console.log(err);
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
          }
        );
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtProducciones' && this.dtProducciones) {
      this.dtProducciones.filterGlobal(filterValue, 'contains');
    }
  }
}
