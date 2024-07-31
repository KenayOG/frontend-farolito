import { Component, OnInit } from '@angular/core';
import { ComponentInventory } from '../../interfaces/component-inventory';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioComponenteService } from '../../services/inventario-componente.service';
import { InventarioLamparaService } from '../../services/inventario-lampara.service';

@Component({
  selector: 'app-administracion-inventario',
  templateUrl: './administracion-inventario.component.html',
  styleUrl: './administracion-inventario.component.css',
})
export class AdministracionInventarioComponent {
  componentesInventory: ComponentInventory[] = [];
  //cargando: boolean = true;

  lampsInventory: LampInventory[] = [];

  constructor(
    private inventarioComponenteService: InventarioComponenteService,
    private inventarioLamparaService: InventarioLamparaService
  ) {
    this.obtenerInventarioComponentes();
    this.obtenerInventarioLamparas();
  }

  obtenerInventarioLamparas() {
    //this.cargando = true;
    this.inventarioLamparaService.getInventarioLampara().subscribe({
      next: (data) => {
        this.lampsInventory = data;
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      },
      error: (e) => {
        console.log(e);
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      },
    });
  }

  obtenerInventarioComponentes() {
    //this.cargando = true;
    this.inventarioComponenteService.getInventarioComponente().subscribe({
      next: (data) => {
        this.componentesInventory = data;
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      },
      error: (e) => {
        console.log(e);
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      },
    });
  }
}
