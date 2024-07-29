import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetail } from '../../interfaces/component-detail';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { InventarioComponenteService } from '../../services/inventario-componente.service';

@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css',
})
export class DetalleComponenteComponent implements OnInit {
  componentDetail: ComponentInventory | undefined;
  nombreComponente: string = '';
  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioComponenteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventarioService.getComponentePorId(id).subscribe(
      (component) => {
        this.componentDetail = component;
        this.nombreComponente =
          this.componentDetail?.nombre || 'Nombre del Componente no encontrado';
      },
      (error) => {
        console.error('Error al obtener el detalle del componente', error);
      }
    );
  }
}
