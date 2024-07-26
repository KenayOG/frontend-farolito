import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-pedido-cliente',
  templateUrl: './detalle-pedido-cliente.component.html',
  styleUrl: './detalle-pedido-cliente.component.css',
})
export class DetallePedidoClienteComponent {
  idPedido: number = 21;
  nombreProducto: string = 'Lampara Moderna';
  estatus: string[] = ['Pedido Realizado', 'Enviado', 'Entregado'];
  fecha: string[] = ['2023-12-09', '2023-10-10', '2023-03-27'];
  /* metodoPago: string = 'Paypal'; */
  metodoPago: string = 'Tarjeta';
  direccion: string = '123 Main St.Anytown, CA 12345';

  getEstatusIcono(status: string): string {
    switch (status) {
      case 'Pedido Realizado':
        return 'fas fa-shopping-cart';
      case 'Enviado':
        return 'fas fa-truck';
      case 'Entregado':
        return 'fas fa-check-circle';
      default:
        return 'fas fa-info-circle';
    }
  }

  getMetodoPagoIcono(metodoPago: string): string {
    if (metodoPago === 'Paypal') {
      return 'fa-brands fa-paypal';
    } else if (metodoPago === 'Tarjeta') {
      return 'fa-solid fa-credit-card';
    } else {
      return 'fa-solid fa-sack-dollar';
    }
  }
}
