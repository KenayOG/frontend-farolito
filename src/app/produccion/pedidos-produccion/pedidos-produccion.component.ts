import { Component } from '@angular/core';
import { Production } from '../../interfaces/production';

@Component({
  selector: 'app-pedidos-produccion',
  templateUrl: './pedidos-produccion.component.html',
  styleUrl: './pedidos-produccion.component.css',
})
export class PedidosProduccionComponent {
  productions: Production[] = [
    {
      id: 1,
      employee: 'Sergio de Jesus Salazar Cabrera',
      date: '2024-02-22',
      orderOf: 'Lampara Moderna',
      quantity: 12,
    },
    {
      id: 2,
      employee: 'Adrian Dario Bravo Luna',
      date: '2023-05-08',
      orderOf: 'Lampara de Mesa',
      quantity: 12,
    },
    {
      id: 3,
      employee: 'Jose Angel Ramirez Almeida',
      date: '2023-01-12',
      orderOf: 'Lampara de Techo',
      quantity: 12,
    },
    {
      id: 4,
      employee: 'Angel Eduardo Juarez Alvizo',
      date: '2023-09-28',
      orderOf: 'Lamparas Colgantes',
      quantity: 12,
    },
    {
      id: 5,
      employee: 'Alexa Guerrero Lopez',
      date: '2023-06-26',
      orderOf: 'Lampara Exteriores',
      quantity: 12,
    },
  ];
}
