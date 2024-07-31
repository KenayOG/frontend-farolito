import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeModule } from './home/home.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VentasModule } from './ventas/ventas.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { LogisticaModule } from './logistica/logistica.module';
import { ProduccionModule } from './produccion/produccion.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecetasModule } from './recetas/recetas.module';
import { InventarioModule } from './inventario/inventario.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { MermaModule } from './merma/merma.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';

import { PerfilModule } from './perfil/perfil.module';
import { ComprasModule } from './compras/compras.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AnimateOnScrollModule,
    CardModule,
    StyleClassModule,
    RouterModule.forRoot(routes),
    HomeModule,
    AutenticacionModule,
    UsuariosModule,
    VentasModule,
    ProveedoresModule,
    LogisticaModule,
    ProduccionModule,
    NoopAnimationsModule,
    RecetasModule,
    InventarioModule,
    DashboardModule,
    CatalogoModule,
    MermaModule,
    PedidosModule,
    PerfilModule,
    ComprasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
