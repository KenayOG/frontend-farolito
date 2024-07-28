import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { Componente } from '../../interfaces/components';

@Component({
  selector: 'app-administracion-recetas',
  templateUrl: './administracion-recetas.component.html',
  styleUrl: './administracion-recetas.component.css',
})
export class AdministracionRecetasComponent implements OnInit {
  components: Componente[] = [
    {
      id: 1,
      name: 'Cables',
    },
    {
      id: 2,
      name: 'Bateria',
    },
    {
      id: 3,
      name: 'Bombilla',
    },
    {
      id: 4,
      name: 'Interruptor',
    },
    {
      id: 5,
      name: 'Regulador',
    },
    {
      id: 1,
      name: 'Cables',
    },
    {
      id: 2,
      name: 'Bateria',
    },
    {
      id: 3,
      name: 'Bombilla',
    },
    {
      id: 4,
      name: 'Interruptor',
    },
    {
      id: 5,
      name: 'Regulador',
    },
  ];
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Lampara Moderna',
      components: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
      ],
      image: 'assets/images/lampara-moderna.webp',
    },
    {
      id: 2,
      name: 'Lampara Colgante',
      components: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
      ],
      image: 'assets/images/lampara-colgante.webp',
    },
    {
      id: 3,
      name: 'Lampara Exteriores',
      components: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
      ],
      image: 'assets/images/lampara-exteriores.webp',
    },
    {
      id: 4,
      name: 'Lampara Mesa',
      components: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
      ],
      image: 'assets/images/lampara-mesa.webp',
    },
    {
      id: 5,
      name: 'Lampara de Piso',
      components: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
      ],
      image: 'assets/images/lampara-pie.webp',
    },
    {
      id: 6,
      name: 'Lampara de Techo',
      components: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
      ],
      image: 'assets/images/lampara-techo.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
