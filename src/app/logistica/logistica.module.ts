import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatusPedidosComponent } from './estatus-pedidos/estatus-pedidos.component';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EstatusPedidosComponent],
  imports: [
    CommonModule,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LogisticaModule {}
