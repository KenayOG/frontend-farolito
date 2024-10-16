import { Routes } from '@angular/router';
import { HomeProductsComponent } from './home/home-products/home-products.component';

import { LoginComponent } from './autenticacion/login/login.component';
import { SignUpComponent } from './autenticacion/sign-up/sign-up.component';
import { AdministrarEmpleadosComponent } from './usuarios/administrar-empleados/administrar-empleados.component';
import { CrearEmpleadoComponent } from './usuarios/crear-empleado/crear-empleado.component';
import { AdministrarProveedoresComponent } from './proveedores/administrar-proveedores/administrar-proveedores.component';
import { EditarEmpleadoComponent } from './usuarios/editar-empleado/editar-empleado.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';
import { CrearProveedorComponent } from './proveedores/crear-proveedor/crear-proveedor.component';
import { EstatusPedidosComponent } from './logistica/estatus-pedidos/estatus-pedidos.component';
import { PedidosProduccionComponent } from './produccion/pedidos-produccion/pedidos-produccion.component';
import { AdministracionRecetasComponent } from './recetas/administracion-recetas/administracion-recetas.component';
import { AdministracionInventarioComponent } from './inventario/administracion-inventario/administracion-inventario.component';
import { DetalleLamparaComponent } from './inventario/detalle-lampara/detalle-lampara.component';
import { DetalleComponenteComponent } from './inventario/detalle-componente/detalle-componente.component';
import { VistaDashboardComponent } from './dashboard/vista-dashboard/vista-dashboard.component';
import { CatalogoProductosComponent } from './catalogo/catalogo-productos/catalogo-productos.component';
import { EstatusPedidosClientesComponent } from './pedidos/estatus-pedidos-clientes/estatus-pedidos-clientes.component';
import { AdministracionMermaComponent } from './merma/administracion-merma/administracion-merma.component';
import { ConfirmarCarritoComponent } from './home/confirmar-carrito/confirmar-carrito.component';
import { AgregarLoteComponentesComponent } from './inventario/agregar-lote-componentes/agregar-lote-componentes.component';
import { DetallePedidoClienteComponent } from './pedidos/detalle-pedido-cliente/detalle-pedido-cliente.component';

import { AcercadeComponent } from './acercade/acercade.component';
import { VerDatosPerfilComponent } from './perfil/ver-datos-perfil/ver-datos-perfil.component';
import { FinanzasComparativoComponent } from './finanzas/finanzas-comparativo/finanzas-comparativo.component';
import { ForgotPasswordComponent } from './autenticacion/forgot-password/forgot-password.component';
import { GenerarProduccionComponent } from './produccion/generar-produccion/generar-produccion.component';
import { AgregarComponenteComponent } from './inventario/agregar-componente/agregar-componente.component';
import { AdministracionComprasComponent } from './compras/administracion-compras/administracion-compras.component';
import { EditarRecetasComponent } from './recetas/editar-recetas/editar-recetas.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/acercade', pathMatch: 'full' },
  { path: 'home', component: HomeProductsComponent },
  {
    path: 'pagar-carrito',
    component: ConfirmarCarritoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'usuarios',
    component: AdministrarEmpleadosComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador'] },
  },
  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'editar-empleado',
    component: EditarEmpleadoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'proveedores',
    component: AdministrarProveedoresComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Almacen'] },
  },
  {
    path: 'crear-proveedor',
    component: CrearProveedorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'editar-proveedor',
    component: EditarProveedorComponent,
    canActivate: [authGuard],
  },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'logistica',
    component: EstatusPedidosComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Logística'] },
  },
  {
    path: 'produccion',
    component: PedidosProduccionComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Produccion'] },
  },
  {
    path: 'recetas',
    component: AdministracionRecetasComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Produccion'] },
  },
  {
    path: 'editar-receta',
    component: EditarRecetasComponent,
    canActivate: [authGuard],
  },
  {
    path: 'inventario',
    component: AdministracionInventarioComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Almacen'] },
  },
  { path: 'detalle-lampara/:id', component: DetalleLamparaComponent },
  { path: 'detalle-componente/:id', component: DetalleComponenteComponent },
  {
    path: 'agregar-lote/:id',
    component: AgregarLoteComponentesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    component: VistaDashboardComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Produccion', 'Almacen', 'Logística'] },
  },
  {
    path: 'catalogo',
    component: CatalogoProductosComponent,
  },
  {
    path: 'pedidos',
    component: EstatusPedidosClientesComponent,
    canActivate: [authGuard],
    data: { roles: ['Cliente', 'Administrador'] },
  },
  {
    path: 'detalle-pedido/:id',
    component: DetallePedidoClienteComponent,
    canActivate: [authGuard],
  },
  {
    path: 'merma',
    component: AdministracionMermaComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador', 'Produccion', 'Almacen'] },
  },
  {
    path: 'mi-perfil',
    component: VerDatosPerfilComponent,
    canActivate: [authGuard],
  },
  {
    path: 'finanzas',
    component: FinanzasComparativoComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador'] },
  },
  {
    path: 'generar-produccion',
    component: GenerarProduccionComponent,
    canActivate: [authGuard],
  },
  {
    path: 'catalogo-componentes',
    component: AgregarComponenteComponent,
    canActivate: [authGuard],
  },
  {
    path: 'compras',
    component: AdministracionComprasComponent,
    canActivate: [authGuard],
    data: { roles: ['Administrador'] },
  },
];
