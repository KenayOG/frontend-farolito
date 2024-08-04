import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { AdministracionInventarioComponent } from './administracion-inventario/administracion-inventario.component';
import { DetalleLamparaComponent } from './detalle-lampara/detalle-lampara.component';
import { RouterLink } from '@angular/router';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';
import { AgregarLoteComponentesComponent } from './agregar-lote-componentes/agregar-lote-componentes.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InventarioService } from '../services/inventario.service';
import { MermaService } from '../services/merma.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
@NgModule({
  declarations: [
    AdministracionInventarioComponent,
    DetalleLamparaComponent,
    DetalleComponenteComponent,
    AgregarLoteComponentesComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    TableModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    InventarioService,
    MermaService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class InventarioModule {}
