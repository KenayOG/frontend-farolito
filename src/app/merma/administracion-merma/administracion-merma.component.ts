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
  //cargando: boolean = true;

  constructor(private mermaService: MermaService) {
    this.obtenerMermaLamparas();
    this.obtenerMermaComponentes();
  }

  obtenerMermaLamparas() {
    //this.cargando = true;
    this.mermaService.getMermaLamparas().subscribe({
      next: (data) => {
        this.decreasedLamps = data;
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
  obtenerMermaComponentes() {
    //this.cargando = true;
    this.mermaService.getMermaComponentes().subscribe({
      next: (data) => {
        this.decreasedComponents = data;
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
