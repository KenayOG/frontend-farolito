import { Component } from '@angular/core';
import { LampDecrease } from '../../interfaces/lamp-decrease';
import { ComponenteDecrease } from '../../interfaces/component-decrease';
import { MermaService } from '../../services/merma.service';

@Component({
  selector: 'app-administracion-merma',
  templateUrl: './administracion-merma.component.html',
  styleUrl: './administracion-merma.component.css',
})
export class AdministracionMermaComponent {
  decreasedLamps: LampDecrease[] = [];
  decreasedComponents: ComponenteDecrease[] = [];

  constructor(private mermaService: MermaService) {
    this.obtenerMermaLamparas();
    this.obtenerMermaComponentes();
  }

  obtenerMermaLamparas() {
    this.mermaService.getMermaLamparas().subscribe({
      next: (data) => {
        this.decreasedLamps = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  obtenerMermaComponentes() {
    this.mermaService.getMermaComponentes().subscribe({
      next: (data) => {
        this.decreasedComponents = data;
        console.log(this.decreasedComponents);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
