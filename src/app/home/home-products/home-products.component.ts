import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
})
export class HomeProductsComponent {
  @ViewChildren('cartButton') cartbuttons!: QueryList<ElementRef>;
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
      image: 'lampara-exteriores.jpeg',
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
      image: 'lampara-exteriores.jpeg',
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
    {
      id: 16,
      name: 'Lamparas Colgantes',
      price: 250.5,
      image: 'lampara-colgante.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 17,
      name: 'Lampara Exteriores',
      price: 399,
      image: 'lampara-exteriores.jpeg',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 18,
      name: 'Lampara de Piso',
      price: 179.99,
      image: 'lampara-pie.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 19,
      name: 'Lampara Moderna',
      price: 599.0,
      image: 'lampara-moderna.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 20,
      name: 'Lampara de Mesa',
      price: 119.5,
      image: 'lampara-mesa.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 21,
      name: 'Lampara de Techo',
      price: 340.5,
      image: 'lampara-techo.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 22,
      name: 'Lamparas Colgantes',
      price: 250.5,
      image: 'lampara-colgante.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 23,
      name: 'Lampara Exteriores',
      price: 399,
      image: 'lampara-exteriores.jpeg',
      components: ['Detalle 1', 'Detalle 2'],
    },
    {
      id: 24,
      name: 'Lampara de Piso',
      price: 179.99,
      image: 'lampara-pie.webp',
      components: ['Detalle 1', 'Detalle 2'],
    },
  ];

  constructor(config: NgbPopoverConfig, private elementRef: ElementRef) {
    config.placement = 'end';
    config.triggers = 'hover';

    config.popperOptions = (options) => {
      for (const modifier of options.modifiers || []) {
        if (modifier.name === 'offset' && modifier.options) {
          modifier.options['offset'] = () => [30, 8];
        }
      }
      return options;
    };
  }

  animateCartButton(event: MouseEvent) {
    const button = event?.currentTarget as HTMLElement;
    button.classList.add('clicked');

    setTimeout(() => {
      button.classList.remove('clicked');
    }, 1500);
  }
}
