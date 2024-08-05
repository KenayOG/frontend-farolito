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
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RecetasModule } from './recetas/recetas.module';
import { InventarioModule } from './inventario/inventario.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { MermaModule } from './merma/merma.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PerfilModule } from './perfil/perfil.module';
import { FinanzasModule } from './finanzas/finanzas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignUpComponent } from './autenticacion/sign-up/sign-up.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Asegúrate de importar esto

@NgModule({
  declarations: [AppComponent, SignUpComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    AnimateOnScrollModule,
    CardModule,
    NgbModule,
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
    FinanzasModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
