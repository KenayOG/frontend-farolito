import { Component } from '@angular/core';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-confirmar-carrito',
  templateUrl: './confirmar-carrito.component.html',
  styleUrl: './confirmar-carrito.component.css',
})
export class ConfirmarCarritoComponent {
  cartProducts: Cart[] = [
    {
      id: 1,
      name: 'Lampara Moderna',
      price: 599.0,
      image: 'lampara-moderna.webp',
      quantity: 3,
      components: ['Lampara Moderna 1', 'Lampara Moderna 2'],
    },
    {
      id: 2,
      name: 'Lampara de Mesa',
      price: 119.5,
      image: 'lampara-mesa.webp',
      quantity: 1,
      components: ['Lampara de Mesa 1', 'Lampara de Mesa 2'],
    },
    {
      id: 3,
      name: 'Lampara de Techo',
      price: 340.5,
      image: 'lampara-techo.webp',
      quantity: 5,
      components: ['Lampara de Techo 1', 'Lampara de Techo 2'],
    },
    {
      id: 4,
      name: 'Lamparas Colgantes',
      price: 250.5,
      image: 'lampara-colgante.webp',
      quantity: 8,
      components: ['Lampara Colgante 1', 'Lampara Colgante 2'],
    },
    {
      id: 5,
      name: 'Lampara Exteriores',
      price: 399,
      image: 'lampara-exteriores.jpeg',
      quantity: 2,
      components: ['Lampara Exteriores 1', 'Lampara Exteriores 2'],
    },
  ];
}
