import { Component, OnInit } from '@angular/core';
import { OrderProduct } from '../../interfaces/order-product';
import { Recipe } from '../../interfaces/recipe';
import { OrderCustomer } from '../../interfaces/customer-order';

@Component({
  selector: 'app-estatus-pedidos-clientes',
  templateUrl: './estatus-pedidos-clientes.component.html',
  styleUrl: './estatus-pedidos-clientes.component.css',
})
export class EstatusPedidosClientesComponent implements OnInit{
  orders: OrderCustomer[] = [];

  filtroOrdenesEnviadas: OrderCustomer[] = [];
  filtroOrdenesEnproceso: OrderCustomer[] = [];
  filtroOrdenesSinpago: OrderCustomer[] = [];
  filtroOrdenesFinalizado: OrderCustomer[] = [];
  indexActivosTodo: number[] = [];
  indexActivosEnviadas: number[] = [];
  indexActivosEnproceso: number[] = [];
  indexActivosSinpago: number[] = [];
  indexActivosFinalizado: number[] = [];
  recipes: Recipe[] = [];

  ngOnInit() {
    this.filtroOrdenesEnviadas = this.orders.filter(
      (order) => order.estatus === 'Enviado'
    );
    this.indexActivosEnviadas = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.filtroOrdenesFinalizado = this.orders.filter(
      (order) => order.estatus === 'Finalizado'
    );
    this.indexActivosFinalizado = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.filtroOrdenesEnproceso = this.orders.filter(
      (order) => order.estatus === 'En proceso'
    );
    this.indexActivosEnproceso = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.filtroOrdenesSinpago = this.orders.filter(
      (order) => order.estatus === 'Sin Pagar'
    );
    this.indexActivosSinpago = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.indexActivosTodo = this.orders.map((_, index) => index);
  }
}
