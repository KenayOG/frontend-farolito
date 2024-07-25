import { Component } from '@angular/core';
import { Order } from '../../interfaces/orders';

@Component({
  selector: 'app-estatus-pedidos',
  templateUrl: './estatus-pedidos.component.html',
  styleUrl: './estatus-pedidos.component.css',
})
export class EstatusPedidosComponent {
  orders: Order[] = [
    {
      id: 1,
      status: 'Enviado',
      stage: 'Fuera para entrega',
      dateTime: '2023-06-26 12:34 PM',
      details: 'Entregado a 123 Main St, Anytown USA',
    },
    {
      id: 2,
      status: 'Entregado',
      stage: 'Entregado',
      dateTime: '2023-06-25 10:15 AM',
      details: 'Entregado a 456 Oak Rd, Somewhere City',
    },
    {
      id: 3,
      status: 'En Proceso',
      stage: 'Preparando para enviar',
      dateTime: '2023-06-24 3:22 PM',
      details: 'Pedido recibido y en preparacion para su envio',
    },
    {
      id: 4,
      status: 'Cancelado',
      stage: 'Cancelado',
      dateTime: '2023-06-23 9:01 AM',
      details: 'Pedido cancelado por el cliente',
    },
    {
      id: 5,
      status: 'Enviado',
      stage: 'En transito',
      dateTime: '2023-06-22 2:45 PM',
      details: 'Paquete recogido por el transportista',
    },
  ];
}
