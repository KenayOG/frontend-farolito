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
import { AgregarPedidoClienteComponent } from './agregar-pedido-cliente/agregar-pedido-cliente.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstatusPedidosClientesComponent,
    DetallePedidoClienteComponent,
    AgregarPedidoClienteComponent,
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
    DropdownModule,
    FormsModule,
  ],
})
export class PedidosModule {}
