import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComprasComponent } from './administracion-compras/administracion-compras.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AdministracionComprasComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
    HttpClientModule,
    ProgressSpinnerModule,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class ComprasModule {}
