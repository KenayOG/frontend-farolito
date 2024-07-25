import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LampDetail } from '../../interfaces/lamp-detail';

@Component({
  selector: 'app-detalle-lampara',
  templateUrl: './detalle-lampara.component.html',
  styleUrl: './detalle-lampara.component.css',
})
export class DetalleLamparaComponent implements OnInit {
  lamparaId: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.lamparaId = params.get('id');
    });
  }

  lampDetail: LampDetail[] = [
    {
      id: 1,
      name: 'Lampara Moderna',
      quantity: 23,
      price: 234.8,
      lote: 'LOTE01',
      date: '2023-12-09',
      productionCost: 234,
      createdBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 2,
      name: 'Lampara Moderna',
      quantity: 23,
      price: 234.8,
      lote: 'LOTE02',
      date: '2023-12-09',
      productionCost: 234,
      createdBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 3,
      name: 'Lampara Moderna',
      quantity: 23,
      price: 234.8,
      lote: 'LOTE03',
      date: '2023-12-09',
      productionCost: 234,
      createdBy: 'Adrian Dario Bravo Luna',
    },
    {
      id: 4,
      name: 'Lampara Moderna',
      quantity: 28,
      price: 256.8,
      lote: 'LOTE04',
      date: '2023-12-09',
      productionCost: 234,
      createdBy: 'Angel Eduardo Juarez Alvizo',
    },
    {
      id: 5,
      name: 'Lampara Moderna',
      quantity: 30,
      price: 294.8,
      lote: 'LOTE05',
      date: '2023-12-09',
      productionCost: 234,
      createdBy: 'Alexa Guerrero Lopez',
    },
  ];
}
