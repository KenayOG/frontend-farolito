import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosProduccionComponent } from './pedidos-produccion/pedidos-produccion.component';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PedidosProduccionComponent],
  imports: [
    CommonModule,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
  ],
})
export class ProduccionModule {}
