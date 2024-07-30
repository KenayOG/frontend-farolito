import { Component, OnInit } from '@angular/core';
import { OrderProduct } from '../../interfaces/orderProduct';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-estatus-pedidos-clientes',
  templateUrl: './estatus-pedidos-clientes.component.html',
  styleUrl: './estatus-pedidos-clientes.component.css',
})
export class EstatusPedidosClientesComponent implements OnInit {
  orders: OrderProduct[] = [
    {
      id: 1,
      nameProduct: 'Lampara Moderna',
      price: 599.0,
      quantity: 3,
      image: 'assets/images/lampara-moderna.webp',
      status: 'Enviado',
    },
    {
      id: 2,
      nameProduct: 'Lampara de Mesa',
      price: 299.0,
      quantity: 2,
      image: 'assets/images/lampara-mesa.webp',
      status: 'Finalizado',
    },
    {
      id: 3,
      nameProduct: 'Lampara Colgante',
      price: 999.0,
      quantity: 4,
      image: 'assets/images/lampara-colgante.webp',
      status: 'En proceso',
    },
    {
      id: 4,
      nameProduct: 'Lampara de Piso',
      price: 899.0,
      quantity: 6,
      image: 'assets/images/lampara-pie.webp',
      status: 'Sin Pagar',
    },
  ];

  filtroOrdenesEnviadas: OrderProduct[] = [];
  filtroOrdenesEnproceso: OrderProduct[] = [];
  filtroOrdenesSinpago: OrderProduct[] = [];
  filtroOrdenesFinalizado: OrderProduct[] = [];
  indexActivosTodo: number[] = [];
  indexActivosEnviadas: number[] = [];
  indexActivosEnproceso: number[] = [];
  indexActivosSinpago: number[] = [];
  indexActivosFinalizado: number[] = [];
  recipes: Recipe[] = [];

  ngOnInit() {
    /* Filtrar y mantener indices activos para apertura de acordiones */
    this.filtroOrdenesEnviadas = this.orders.filter(
      (order) => order.status === 'Enviado'
    );
    this.indexActivosEnviadas = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.filtroOrdenesFinalizado = this.orders.filter(
      (order) => order.status === 'Finalizado'
    );
    this.indexActivosFinalizado = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.filtroOrdenesEnproceso = this.orders.filter(
      (order) => order.status === 'En proceso'
    );
    this.indexActivosEnproceso = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.filtroOrdenesSinpago = this.orders.filter(
      (order) => order.status === 'Sin Pagar'
    );
    this.indexActivosSinpago = this.filtroOrdenesEnviadas.map(
      (_, index) => index
    );
    this.indexActivosTodo = this.orders.map((_, index) => index);
  }
}
