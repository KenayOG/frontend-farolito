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
  cargando: boolean = true;

  constructor(private produccionService: ProduccionService) {
    this.obtenerSolicitudesProduccion();
  }

  obtenerSolicitudesProduccion() {
    this.cargando = true;
    this.produccionService.getSolicitudesProduccion().subscribe({
      next: (data) => {
        this.solicitudesProduccion = data;
        this.cargando = false;
      },
      error: (e) => {
        console.log(e);
        this.cargando = false;
      },
    });
  }
}
