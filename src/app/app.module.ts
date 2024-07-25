import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeModule } from './home/home.module';
import { PruebaModule } from './prueba/prueba.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VentasModule } from './ventas/ventas.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { LogisticaModule } from './logistica/logistica.module';
import { ProduccionModule } from './produccion/produccion.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecetasModule } from './recetas/recetas.module';
import { InventarioModule } from './inventario/inventario.module';
import { ComprasModule } from './compras/compras.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { MermaModule } from './merma/merma.module';
import { PedidosModule } from './pedidos/pedidos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    PruebaModule,
    AutenticacionModule,
    UsuariosModule,
    VentasModule,
    ProveedoresModule,
    LogisticaModule,
    ProduccionModule,
    NoopAnimationsModule,
    RecetasModule,
    InventarioModule,
    ComprasModule,
    DashboardModule,
    CatalogoModule,
    MermaModule,
    PedidosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
