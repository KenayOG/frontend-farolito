import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatusPedidosClientesComponent } from './estatus-pedidos-clientes/estatus-pedidos-clientes.component';
import { DetallePedidoClienteComponent } from './detalle-pedido-cliente/detalle-pedido-cliente.component';



@NgModule({
  declarations: [
    EstatusPedidosClientesComponent,
    DetallePedidoClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
