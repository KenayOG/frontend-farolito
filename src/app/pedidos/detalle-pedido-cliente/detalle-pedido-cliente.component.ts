import { Component, OnInit } from '@angular/core';
import { OrderCustomer } from '../../interfaces/customer-order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-pedido-cliente',
  templateUrl: './detalle-pedido-cliente.component.html',
  styleUrl: './detalle-pedido-cliente.component.css',
})
export class DetallePedidoClienteComponent implements OnInit {
  pedido: OrderCustomer | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.pedido) {
      this.pedido = state.pedido;
    } else {
      const id = Number(this.route.snapshot.paramMap.get('id'));
    }
  }

  goBack(): void {
    this.location.back();
  }

  getEstatusIcono(estatus: string | undefined): string {
    switch (estatus) {
      case 'En Proceso':
        return 'fa-solid fa-hourglass-half';
      case 'En Camino':
        return 'fas fa-truck';
      case 'Enviado':
        return 'fa-solid fa-paper-plane';
      case 'Finalizado':
        return 'fa-solid fa-circle-check';
      default:
        return 'fa-solid fa-question'; // Ícono por defecto si el estatus no coincide
    }
  }
}
