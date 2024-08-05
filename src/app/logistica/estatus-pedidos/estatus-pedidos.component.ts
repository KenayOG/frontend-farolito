import { Component, ViewChild, ElementRef } from '@angular/core';
import { Order } from '../../interfaces/orders';
import { LogisticManager } from '../../interfaces/logistic-manager';
import { PedidosService } from '../../services/pedidos.service';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-estatus-pedidos',
  templateUrl: './estatus-pedidos.component.html',
  styleUrl: './estatus-pedidos.component.css',
})
export class EstatusPedidosComponent {
  orders: LogisticManager[] = [];
  cargando: boolean = true;
  @ViewChild('dtPedidosLogistica') dtPedidosLogistica!: Table;

  constructor(private pedidosService: PedidosService) {
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.cargando = true;
    this.pedidosService.getTodosLosPedidos().subscribe({
      next: (data) => {
        this.orders = data;
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

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtPedidosLogistica' && this.dtPedidosLogistica) {
      this.dtPedidosLogistica.filterGlobal(filterValue, 'contains');
    }
  }
}
