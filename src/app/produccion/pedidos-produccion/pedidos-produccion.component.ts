import { Component } from '@angular/core';
import { Production } from '../../interfaces/production';

@Component({
  selector: 'app-pedidos-produccion',
  templateUrl: './pedidos-produccion.component.html',
  styleUrl: './pedidos-produccion.component.css',
})
export class PedidosProduccionComponent {
  productions: Production[] = [];
}
