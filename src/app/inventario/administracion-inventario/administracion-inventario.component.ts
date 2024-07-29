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
export class AdministracionInventarioComponent implements OnInit {
  componentesInventory: ComponentInventory[] = [];

  lampsInventory: LampInventory[] = [];

  constructor(
    private inventarioComponenteService: InventarioComponenteService,
    private inventarioLamparaService: InventarioLamparaService
  ) {}

  ngOnInit(): void {
    this.inventarioComponenteService
      .getInventarioComponente()
      .subscribe((data) => {
        this.componentesInventory = data;
      });
    this.inventarioLamparaService.getInventarioLampara().subscribe((data) => {
      this.lampsInventory = data;
    });
  }
}
