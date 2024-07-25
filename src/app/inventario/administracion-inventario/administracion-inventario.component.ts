import { Component } from '@angular/core';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { LampInventory } from '../../interfaces/lamp-inventory';

@Component({
  selector: 'app-administracion-inventario',
  templateUrl: './administracion-inventario.component.html',
  styleUrl: './administracion-inventario.component.css',
})
export class AdministracionInventarioComponent {
  componentesInventory: ComponentInventory[] = [
    {
      id: 1,
      item: 'Cables',
      quantity: 128,
      price: 12.5,
    },
    {
      id: 2,
      item: 'Bateria',
      quantity: 1,
      price: 10.6,
    },
    {
      id: 3,
      item: 'Bombilla',
      quantity: 12,
      price: 15,
    },
    {
      id: 4,
      item: 'Interruptor',
      quantity: 24,
      price: 21,
    },
    {
      id: 5,
      item: 'Regulador',
      quantity: 5,
      price: 25,
    },
    {
      id: 6,
      item: 'Metal',
      quantity: 10,
      price: 5.5,
    },
    {
      id: 7,
      item: 'Luz Led',
      quantity: 70,
      price: 12,
    },
    {
      id: 8,
      item: 'Ceramica',
      quantity: 55,
      price: 11.7,
    },
    {
      id: 9,
      item: 'Enchufe',
      quantity: 10,
      price: 35,
    },
    {
      id: 10,
      item: 'Chips',
      quantity: 40,
      price: 50,
    },
    {
      id: 11,
      item: 'Transformador',
      quantity: 35,
      price: 90,
    },
    {
      id: 12,
      item: 'Casquillo',
      quantity: 30,
      price: 120,
    },
  ];

  lampsInventory: LampInventory[] = [
    {
      id: 1,
      name: 'Lampara Moderna',
      quantity: 30,
      price: 120,
    },
    {
      id: 2,
      name: 'Lampara de Piso',
      quantity: 30,
      price: 120,
    },
    {
      id: 3,
      name: 'Lampara de Techo',
      quantity: 30,
      price: 120,
    },
    {
      id: 4,
      name: 'Lamparas Colgantes',
      quantity: 30,
      price: 120,
    },
    {
      id: 5,
      name: 'Lampara de Mesa',
      quantity: 30,
      price: 120,
    },
    {
      id: 6,
      name: 'Lampara Exteriores',
      quantity: 30,
      price: 120,
    },
  ];
}
