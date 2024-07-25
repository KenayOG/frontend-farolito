import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetail } from '../../interfaces/component-detail';

@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css',
})
export class DetalleComponenteComponent implements OnInit {
  componenteId: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.componenteId = params.get('id');
    });
  }

  componentDetail: ComponentDetail[] = [
    {
      id: 1,
      quantity: 23,
      expiration: '2023-03-12',
      brand: 'Marca 1',
      lote: 'LOTE01',
      purchaseDate: '2023-12-09',
      purchaseCost: 234,
      provider: 'Jose Angel Ramirez Almeida',
      phone: '1234567890',
    },
    {
      id: 2,
      quantity: 23,
      expiration: '2023-03-12',
      brand: 'Marca 1',
      lote: 'LOTE02',
      purchaseDate: '2023-12-09',
      purchaseCost: 234,
      provider: 'Jose Angel Ramirez Almeida',
      phone: '1234567890',
    },
    {
      id: 3,
      quantity: 23,
      expiration: '2023-03-12',
      brand: 'Marca 1',
      lote: 'LOTE03',
      purchaseDate: '2023-12-09',
      purchaseCost: 234,
      provider: 'Jose Angel Ramirez Almeida',
      phone: '1234567890',
    },
    {
      id: 4,
      quantity: 28,
      expiration: '2023-03-12',
      brand: 'Marca 1',
      lote: 'LOTE04',
      purchaseDate: '2023-12-09',
      purchaseCost: 234,
      provider: 'Jose Angel Ramirez Almeida',
      phone: '1234567890',
    },
    {
      id: 5,
      quantity: 30,
      expiration: '2023-03-12',
      brand: 'Marca 1',
      lote: 'LOTE05',
      purchaseDate: '2023-12-09',
      purchaseCost: 234,
      provider: 'Jose Angel Ramirez Almeida',
      phone: '1234567890',
    },
  ];
}
