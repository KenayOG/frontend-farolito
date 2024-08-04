import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosProduccionComponent } from './pedidos-produccion/pedidos-produccion.component';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { ProduccionService } from '../services/produccion.service';
import { AppComponent } from '../app.component';
import { GenerarProduccionComponent } from './generar-produccion/generar-produccion.component';
import { RecetasService } from '../services/recetas.service';
@NgModule({
  declarations: [PedidosProduccionComponent, GenerarProduccionComponent],
  imports: [
    CommonModule,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterLink
  ],
  providers: [
    ProduccionService,
    RecetasService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class ProduccionModule {}
