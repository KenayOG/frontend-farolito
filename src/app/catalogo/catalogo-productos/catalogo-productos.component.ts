import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css',
})
export class CatalogoProductosComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Lampara Moderna',
      price: 599.0,
      image: 'lampara-moderna.webp',
      components: ['Lampara Moderna 1', 'Lampara Moderna 2'],
    },
    {
      id: 2,
      name: 'Lampara de Mesa',
      price: 119.5,
      image: 'lampara-mesa.webp',
      components: ['Lampara de Mesa 1', 'Lampara de Mesa 2'],
    },
    {
      id: 3,
      name: 'Lampara de Techo',
      price: 340.5,
      image: 'lampara-techo.webp',
      components: ['Lampara de Techo 1', 'Lampara de Techo 2'],
    },
    {
      id: 4,
      name: 'Lamparas Colgantes',
      price: 250.5,
      image: 'lampara-colgante.webp',
      components: ['Lampara Colgante 1', 'Lampara Colgante 2'],
    },
    {
      id: 5,
      name: 'Lampara Exteriores',
      price: 399,
      image: 'lampara-exteriores.webp',
      components: ['Lampara Exteriores 1', 'Lampara Exteriores 2'],
    },
    {
      id: 6,
      name: 'Lampara de Piso',
      price: 179.99,
      image: 'lampara-pie.webp',
      components: ['Lampara de Piso 1', 'Lampara de Piso 2'],
    },
    {
      id: 7,
      name: 'Lampara Moderna',
      price: 599.0,
      image: 'lampara-moderna.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 8,
      name: 'Lampara de Mesa',
      price: 119.5,
      image: 'lampara-mesa.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 9,
      name: 'Lampara de Techo',
      price: 340.5,
      image: 'lampara-techo.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 10,
      name: 'Lamparas Colgantes',
      price: 250.5,
      image: 'lampara-colgante.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 11,
      name: 'Lampara Exteriores',
      price: 399,
      image: 'lampara-exteriores.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 12,
      name: 'Lampara de Piso',
      price: 179.99,
      image: 'lampara-pie.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 13,
      name: 'Lampara Moderna',
      price: 599.0,
      image: 'lampara-moderna.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 14,
      name: 'Lampara de Mesa',
      price: 119.5,
      image: 'lampara-mesa.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 15,
      name: 'Lampara de Techo',
      price: 340.5,
      image: 'lampara-techo.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
  ];
}
