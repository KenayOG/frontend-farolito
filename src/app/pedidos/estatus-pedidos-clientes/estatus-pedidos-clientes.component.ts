import { Component, OnInit } from '@angular/core';
import { OrderProduct } from '../../interfaces/order-product';
import { Recipe } from '../../interfaces/recipe';
import { OrderCustomer } from '../../interfaces/customer-order';
import { PedidosService } from '../../services/pedidos.service';
import { RecetasService } from '../../services/recetas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estatus-pedidos-clientes',
  templateUrl: './estatus-pedidos-clientes.component.html',
  styleUrl: './estatus-pedidos-clientes.component.css',
})
export class EstatusPedidosClientesComponent {
  orders: OrderCustomer[] = [];

  filtroOrdenesEnviadas: OrderCustomer[] = [];
  filtroOrdenesEnproceso: OrderCustomer[] = [];
  filtroOrdenesCamino: OrderCustomer[] = [];
  filtroOrdenesFinalizado: OrderCustomer[] = [];
  filtroOrdenesEntregado: OrderCustomer[] = [];
  recipes: Recipe[] = [];
  baseUrl: string = 'https://localhost:5000';
  cargando: boolean = true;

  constructor(
    private pedidosService: PedidosService,
    private recetasService: RecetasService,
    private matSnackbar: MatSnackBar,
    private router: Router
  ) {
    this.ObtenerPedidos();
    this.obtenerRecetas();
  }

  ObtenerPedidos() {
    this.pedidosService.getPedidosUsuario().subscribe({
      next: (data) => {
        //console.log('Datos recibidos:', data);
        this.orders = data;
        this.filtroOrdenesEnviadas = this.orders.filter(
          (order) => order.estatus === 'Enviado'
        );
        this.filtroOrdenesFinalizado = this.orders.filter(
          (order) => order.estatus === 'Finalizado'
        );
        this.filtroOrdenesEnproceso = this.orders.filter(
          (order) => order.estatus === 'En Proceso'
        );
        this.filtroOrdenesCamino = this.orders.filter(
          (order) => order.estatus === 'En Camino'
        );
        /* this.filtroOrdenesCamino = this.orders.filter(
          (order) => order.estatus === 'Entregado'
        ); */
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  obtenerRecetas() {
    this.cargando = true;
    this.recetasService.getRecetas().subscribe({
      next: (data) => {
        this.recipes = data;
        setTimeout(() => {
          this.cargando = false;
        },0);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 0);
      },
    });
  }

  obtenerDetallePedido(pedidoId: number): void {
    const pedidoSeleccionado = this.orders.find(
      (order) => order.id === pedidoId
    );

    if (pedidoSeleccionado) {
      this.router.navigate(['/detalle-pedido', pedidoId], {
        state: { pedido: pedidoSeleccionado },
      });
    } else {
      this.matSnackbar.open('Pedido no encontrado', 'Cerrar', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }

  ObtenerImagen(recetaId: number): string | undefined {
    const receta = this.recipes.find((r) => r.id === recetaId);
    if (receta) {
      return this.getImagen(receta.imagen);
    }
    return undefined;
  }

  getImagen(imagePath: string): string {
    /* console.log(`${this.baseUrl}${imagePath}`); */
    return `${this.baseUrl}${imagePath}`;
  }

  // Calcular total en el pedido
  calculateTotal(products: any[]): number {
    return products.reduce(
      (sum, product) => sum + product.precioUnitario * product.cantidad,
      0
    );
  }

  formatTotal(total: number): string {
    return total.toFixed(2); // Formatea el número a 2 decimales
  }
}
