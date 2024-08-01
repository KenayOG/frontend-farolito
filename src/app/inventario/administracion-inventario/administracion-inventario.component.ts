import { Component, OnInit } from '@angular/core';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-administracion-inventario',
  templateUrl: './administracion-inventario.component.html',
  styleUrl: './administracion-inventario.component.css',
})
export class AdministracionInventarioComponent {
  componentesInventory: ComponentInventory[] = [];
  cargando: boolean = true;

  lampsInventory: LampInventory[] = [];

  constructor(private inventarioService: InventarioService) {
    this.obtenerInventarioComponentes();
    this.obtenerInventarioLamparas();
  }

  obtenerInventarioLamparas() {
    this.cargando = true;
    this.inventarioService.getInventarioLampara().subscribe({
      next: (data) => {
        this.lampsInventory = data;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  obtenerInventarioComponentes() {
    this.inventarioService.getInventarioComponente().subscribe({
      next: (data) => {
        this.componentesInventory = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
