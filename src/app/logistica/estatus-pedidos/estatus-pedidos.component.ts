import { Component } from '@angular/core';
import { Order } from '../../interfaces/orders';

@Component({
  selector: 'app-estatus-pedidos',
  templateUrl: './estatus-pedidos.component.html',
  styleUrl: './estatus-pedidos.component.css',
})
export class EstatusPedidosComponent {
  orders: Order[] = [];
}
