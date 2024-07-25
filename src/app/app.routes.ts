import { Routes } from '@angular/router';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { PruebaComponent } from './prueba/prueba/prueba.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { SignUpComponent } from './autenticacion/sign-up/sign-up.component';
import { AdministrarEmpleadosComponent } from './usuarios/administrar-empleados/administrar-empleados.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { VentasComponent } from './ventas/ventas/ventas.component';
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
import { ComprarComponentesComponent } from './compras/comprar-componentes/comprar-componentes.component';
import { VistaDashboardComponent } from './dashboard/vista-dashboard/vista-dashboard.component';
import { CatalogoProductosComponent } from './catalogo/catalogo-productos/catalogo-productos.component';
import { EstatusPedidosClientesComponent } from './pedidos/estatus-pedidos-clientes/estatus-pedidos-clientes.component';
import { AdministracionMermaComponent } from './merma/administracion-merma/administracion-merma.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeProductsComponent,
  },
  { path: 'prueba', component: PruebaComponent },
  { path: 'usuarios', component: AdministrarEmpleadosComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'editar-empleado', component: EditarEmpleadoComponent },
  {
    path: 'proveedores',
    component: AdministrarProveedoresComponent,
  },
  { path: 'crear-proveedor', component: CrearProveedorComponent },
  { path: 'editar-proveedor', component: EditarProveedorComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'logistica', component: EstatusPedidosComponent },
  { path: 'produccion', component: PedidosProduccionComponent },
  { path: 'recetas', component: AdministracionRecetasComponent },
  { path: 'inventario', component: AdministracionInventarioComponent },
  { path: 'detalle-lampara/:id', component: DetalleLamparaComponent },
  { path: 'detalle-componente/:id', component: DetalleComponenteComponent },
  { path: 'compras', component: ComprarComponentesComponent },
  { path: 'dashboard', component: VistaDashboardComponent },
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: 'pedidos', component: EstatusPedidosClientesComponent },
  { path: 'merma', component: AdministracionMermaComponent },
];
