import { Component } from '@angular/core';
import { Decrease } from '../../interfaces/decrease';

@Component({
  selector: 'app-administracion-merma',
  templateUrl: './administracion-merma.component.html',
  styleUrl: './administracion-merma.component.css',
})
export class AdministracionMermaComponent {
  decreasedLamps: Decrease[] = [
    {
      id: 1,
      productDecreased: 'Lampara Moderna',
      lote: 'LOTE01',
      quantityDecreased: 12,
      description: 'Lamparas rotas',
      dateDecrease: '2023-12-06',
      decreasedBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 1,
      productDecreased: 'Lampara Moderna',
      lote: 'LOTE01',
      quantityDecreased: 12,
      description: 'Lamparas rotas',
      dateDecrease: '2023-12-06',
      decreasedBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 1,
      productDecreased: 'Lampara Moderna',
      lote: 'LOTE01',
      quantityDecreased: 12,
      description: 'Lamparas rotas',
      dateDecrease: '2023-12-06',
      decreasedBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 1,
      productDecreased: 'Lampara Moderna',
      lote: 'LOTE01',
      quantityDecreased: 12,
      description: 'Lamparas rotas',
      dateDecrease: '2023-12-06',
      decreasedBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 1,
      productDecreased: 'Lampara Moderna',
      lote: 'LOTE01',
      quantityDecreased: 12,
      description: 'Lamparas rotas',
      dateDecrease: '2023-12-06',
      decreasedBy: 'Jose Angel Ramirez Almeida',
    },
  ];

  decreasedComponents: Decrease[] = [
    {
      id: 1,
      productDecreased: 'Cables',
      lote: 'LOTE02',
      quantityDecreased: 30,
      description: 'Cables rotos',
      dateDecrease: '2023-12-12',
      decreasedBy: 'Angel Eduardo Juarez Alvizo',
    },
    {
      id: 1,
      productDecreased: 'Cables',
      lote: 'LOTE02',
      quantityDecreased: 30,
      description: 'Cables rotos',
      dateDecrease: '2023-12-12',
      decreasedBy: 'Angel Eduardo Juarez Alvizo',
    },
    {
      id: 1,
      productDecreased: 'Cables',
      lote: 'LOTE02',
      quantityDecreased: 30,
      description: 'Cables rotos',
      dateDecrease: '2023-12-12',
      decreasedBy: 'Angel Eduardo Juarez Alvizo',
    },
    {
      id: 1,
      productDecreased: 'Cables',
      lote: 'LOTE02',
      quantityDecreased: 30,
      description: 'Cables rotos',
      dateDecrease: '2023-12-12',
      decreasedBy: 'Angel Eduardo Juarez Alvizo',
    },
    {
      id: 1,
      productDecreased: 'Cables',
      lote: 'LOTE02',
      quantityDecreased: 30,
      description: 'Cables rotos',
      dateDecrease: '2023-12-12',
      decreasedBy: 'Angel Eduardo Juarez Alvizo',
    },
  ];
}
