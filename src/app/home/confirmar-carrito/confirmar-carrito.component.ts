import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Cart, CartRemove } from '../../interfaces/cart';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaleRequestList } from '../../interfaces/sale';
import { VentaService } from '../../services/venta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-carrito',
  templateUrl: './confirmar-carrito.component.html',
  styleUrls: ['./confirmar-carrito.component.css'],
})
export class ConfirmarCarritoComponent {
  cartProducts: Cart[] = [];
  products: LampInventory[] = [];
  baseUrl: string = 'https://localhost:5000';
  metodoPagoSeleccionado: string | null = null;

  constructor(
    private carritoService: CarritoService,
    private inventarioService: InventarioService,
    private ventaService: VentaService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.obtenerCarrito();
    this.obtenerProductos();
  }

  obtenerCarrito() {
    this.carritoService.getCarrito().subscribe({
      next: (data) => {
        this.cartProducts = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  obtenerProductos() {
    this.inventarioService.getInventarioLampara().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  getImagenProducto(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }

  getPrice(productId: number): number {
    const product = this.products.find((p) => p.id === productId);
    return product ? product.costo : 0;
  }

  calculateTotal(): number {
    return this.cartProducts.reduce((total, cartItem) => {
      return total + cartItem.cantidad * this.getPrice(cartItem.lamparaId);
    }, 0);
  }

  removeFromCart(productId: number) {
    const removeRequest: CartRemove[] = [{ id: productId }];
    this.carritoService.deleteCarrito(removeRequest).subscribe({
      next: () => {
        this.cartProducts = this.cartProducts.filter(
          (item) => item.lamparaId !== productId
        );
        this.calculateTotal();
        this.matSnackBar.open('Producto eliminado del carrito', 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
        });
      },
      error: (err) => {
        console.log(err);
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
          }
        );
      },
    });
  }

  confirmarPago() {
    if (this.isPagoValido()) {
      const saleRequestList: SaleRequestList[] = this.cartProducts.map(
        (cartItem) => ({
          id: cartItem.lamparaId,
          cantidad: cartItem.cantidad,
        })
      );

      this.ventaService.createSell(saleRequestList).subscribe({
        next: (response) => {
          console.log('Venta creada exitosamente:', response);
          this.obtenerCarrito();
          this.matSnackBar.open(response.message, 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center',
          });
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log('Error al crear la venta:', err);
          this.matSnackBar.open(
            'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
            'Cerrar',
            {
              duration: 5000,
              horizontalPosition: 'center',
            }
          );
        },
      });
    }
  }

  isPagoValido(): boolean {
    return this.cartProducts.length > 0 && this.metodoPagoSeleccionado !== null;
  }

  seleccionarMetodoPago(tipoPago: string) {
    this.metodoPagoSeleccionado = tipoPago;
  }
}
