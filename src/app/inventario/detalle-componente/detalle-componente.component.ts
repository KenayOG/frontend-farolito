import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetail } from '../../interfaces/component-detail';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css',
})
export class DetalleComponenteComponent {
  componentDetail: ComponentInventory | undefined;
  nombreComponente: string = '';
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioService
  ) {
    this.obtenerDetalleComponente();
  }

  obtenerDetalleComponente() {
    this.cargando = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventarioService.getComponentePorId(id).subscribe(
      (component) => {
        this.componentDetail = component;
        this.nombreComponente =
          this.componentDetail?.nombre || 'Nombre del Componente no encontrado';
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      (error) => {
        console.error('Error al obtener el detalle del componente', error);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      }
    );
  }
}
