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
import { AgregarPedidoClienteComponent } from './pedidos/agregar-pedido-cliente/agregar-pedido-cliente.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { VerDatosPerfilComponent } from './perfil/ver-datos-perfil/ver-datos-perfil.component';
import { FinanzasComparativoComponent } from './finanzas/finanzas-comparativo/finanzas-comparativo.component';
import { ForgotPasswordComponent } from './autenticacion/forgot-password/forgot-password.component';
import { GenerarProduccionComponent } from './produccion/generar-produccion/generar-produccion.component';
import { AgregarComponenteComponent } from './inventario/agregar-componente/agregar-componente.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeProductsComponent },
  { path: 'pagar-carrito', component: ConfirmarCarritoComponent },
  { path: 'usuarios', component: AdministrarEmpleadosComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'editar-empleado', component: EditarEmpleadoComponent },
  {
    path: 'proveedores',
    component: AdministrarProveedoresComponent,
  },
  { path: 'crear-proveedor', component: CrearProveedorComponent },
  { path: 'editar-proveedor', component: EditarProveedorComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'logistica', component: EstatusPedidosComponent },
  { path: 'produccion', component: PedidosProduccionComponent },
  { path: 'recetas', component: AdministracionRecetasComponent },
  { path: 'inventario', component: AdministracionInventarioComponent },
  { path: 'detalle-lampara/:id', component: DetalleLamparaComponent },
  { path: 'detalle-componente/:id', component: DetalleComponenteComponent },
  { path: 'agregar-lote/:id', component: AgregarLoteComponentesComponent },
  { path: 'dashboard', component: VistaDashboardComponent },
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: 'pedidos', component: EstatusPedidosClientesComponent },
  { path: 'detalle-pedido/:id', component: DetallePedidoClienteComponent },
  { path: 'agregar-pedido', component: AgregarPedidoClienteComponent },
  { path: 'merma', component: AdministracionMermaComponent },
  { path: 'mi-perfil', component: VerDatosPerfilComponent },
  { path: 'finanzas', component: FinanzasComparativoComponent },
  { path: 'generar-produccion', component: GenerarProduccionComponent },
  { path: 'catalogo-componentes', component: AgregarComponenteComponent },
];
