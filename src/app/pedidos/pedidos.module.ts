import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { EstatusPedidosClientesComponent } from './estatus-pedidos-clientes/estatus-pedidos-clientes.component';
import { DetallePedidoClienteComponent } from './detalle-pedido-cliente/detalle-pedido-cliente.component';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    EstatusPedidosClientesComponent,
    DetallePedidoClienteComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    TabViewModule,
    BadgeModule,
    AvatarModule,
    AccordionModule,
    ImageModule,
    DividerModule,
    NgFor,
    NgIf,
  ],
})
export class PedidosModule {}
