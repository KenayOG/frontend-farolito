import { Component } from '@angular/core';
import { Decrease } from '../../interfaces/decrease';

@Component({
  selector: 'app-administracion-merma',
  templateUrl: './administracion-merma.component.html',
  styleUrl: './administracion-merma.component.css',
})
export class AdministracionMermaComponent {
  decreasedLamps: Decrease[] = [];

  decreasedComponents: Decrease[] = [];
}
