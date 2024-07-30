import { Component, OnInit } from '@angular/core';
import { PayMethod } from '../../interfaces/pay-methods';

@Component({
  selector: 'app-agregar-pedido-cliente',
  templateUrl: './agregar-pedido-cliente.component.html',
  styleUrl: './agregar-pedido-cliente.component.css',
})
export class AgregarPedidoClienteComponent implements OnInit {
  value!: string;
  /* productos: ProductCatalogo[] | undefined; */
  /* selectedProduct: ProductCatalogo | undefined; */
  metodosPago: PayMethod[] | undefined;
  selectedPayMethod: PayMethod | undefined;
  ngOnInit() {
    /* this.productos = [
      {
        name: 'Lampara Moderna',
      },
      {
        name: 'Lampara de Mesa',
      },
      {
        name: 'Lampara de Techo',
      },
      {
        name: 'Lamparas Colgantes',
      },
      {
        name: 'Lampara Exteriores',
      },
      {
        name: 'Lampara de Piso',
      },
    ]; */
    this.metodosPago = [
      {
        name: 'Paypal',
      },
      {
        name: 'Tarjeta',
      },
    ];
  }
}
