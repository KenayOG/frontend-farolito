import { Component } from '@angular/core';
import { Cart } from '../../interfaces/cart';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-confirmar-carrito',
  templateUrl: './confirmar-carrito.component.html',
  styleUrl: './confirmar-carrito.component.css',
})
export class ConfirmarCarritoComponent {
  cartProducts: Cart[] = [];

  constructor(private carritoService: CarritoService) {
    this.obtenerCarrito();
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
}
