import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetail } from '../../interfaces/component-detail';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { InventarioService } from '../../services/inventario.service';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-detalle-componente',
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css',
})
export class DetalleComponenteComponent {
  componentDetail: ComponentInventory | undefined;
  nombreComponente: string = '';
  cargando: boolean = true;
  @ViewChild('dtDetalleComponentes') dtDetalleComponentes!: Table;

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

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtDetalleComponentes' && this.dtDetalleComponentes) {
      this.dtDetalleComponentes.filterGlobal(filterValue, 'contains');
    }
  }
}
