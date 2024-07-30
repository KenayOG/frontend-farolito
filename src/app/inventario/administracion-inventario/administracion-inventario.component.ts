import { Component, OnInit } from '@angular/core';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioComponenteService } from '../../services/inventario-componente.service';
import { HttpClientModule } from '@angular/common/http';
import { InventarioLamparaService } from '../../services/inventario-lampara.service';

@Component({
  selector: 'app-administracion-inventario',
  templateUrl: './administracion-inventario.component.html',
  styleUrl: './administracion-inventario.component.css',
})
export class AdministracionInventarioComponent {
  componentesInventory: ComponentInventory[] = [];

  lampsInventory: LampInventory[] = [];

  constructor(
    private inventarioComponenteService: InventarioComponenteService,
    private inventarioLamparaService: InventarioLamparaService
  ) {
    this.obtenerInventarioComponentes();
    this.obtenerInventarioLamparas();
  }

  obtenerInventarioLamparas() {
    this.inventarioLamparaService.getInventarioLampara().subscribe({
      next: (data) => {
        this.lampsInventory = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  obtenerInventarioComponentes() {
    this.inventarioComponenteService.getInventarioComponente().subscribe({
      next: (data) => {
        this.componentesInventory = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
