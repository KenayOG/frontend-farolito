import { Component } from '@angular/core';
import { Production } from '../../interfaces/production';
import { ProduccionService } from '../../services/produccion.service';

@Component({
  selector: 'app-pedidos-produccion',
  templateUrl: './pedidos-produccion.component.html',
  styleUrl: './pedidos-produccion.component.css',
})
export class PedidosProduccionComponent {
  solicitudesProduccion: Production[] = [];
  produccionesCompletadas: [] = [];
  cargando: boolean = true;

  constructor(private produccionService: ProduccionService) {
    this.obtenerSolicitudesProduccion();
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
}
