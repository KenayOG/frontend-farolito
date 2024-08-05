import { Component, ViewChild, ElementRef } from '@angular/core';
import { LampDecrease } from '../../interfaces/lamp-decrease';
import { ComponenteDecrease } from '../../interfaces/component-decrease';
import { MermaService } from '../../services/merma.service';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-administracion-merma',
  templateUrl: './administracion-merma.component.html',
  styleUrl: './administracion-merma.component.css',
})
export class AdministracionMermaComponent {
  decreasedLamps: LampDecrease[] = [];
  decreasedComponents: ComponenteDecrease[] = [];
  cargando: boolean = true;
  @ViewChild('dtMermaLamparas') dtMermaLamparas!: Table;
  @ViewChild('dtMermaComponentes') dtMermaComponentes!: Table;

  constructor(private mermaService: MermaService) {
    this.obtenerMermaLamparas();
    this.obtenerMermaComponentes();
  }

  obtenerMermaLamparas() {
    this.cargando = true;
    this.mermaService.getMermaLamparas().subscribe({
      next: (data) => {
        this.decreasedLamps = data;
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

  obtenerMermaComponentes() {
    this.mermaService.getMermaComponentes().subscribe({
      next: (data) => {
        this.decreasedComponents = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtMermaLamparas' && this.dtMermaLamparas) {
      this.dtMermaLamparas.filterGlobal(filterValue, 'contains');
    } else if (tableId === 'dtMermaComponentes' && this.dtMermaComponentes) {
      this.dtMermaComponentes.filterGlobal(filterValue, 'contains');
    }
  }
}
