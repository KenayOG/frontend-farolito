import { Component } from '@angular/core';
import { Provider } from '../../interfaces/provider';

@Component({
  selector: 'app-administrar-proveedores',
  templateUrl: './administrar-proveedores.component.html',
  styleUrl: './administrar-proveedores.component.css',
})
export class AdministrarProveedoresComponent {
  providers: Provider[] = [
    {
      id: 1,
      name: 'Sergio de Jesus Salazar Cabrera',
      phone: '4792904456',
      attendedBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 2,
      name: 'Jose Angel Ramirez Almeida',
      phone: '4792906049',
      attendedBy: 'Sergio de Jesus Salazar Cabrera',
    },
    {
      id: 3,
      name: 'Adrian Dario Bravo Luna',
      phone: '4793456799',
      attendedBy: 'Jose Angel Ramirez Almeida',
    },
    {
      id: 4,
      name: 'Alexa Guerrero Lopez',
      phone: '4792906321',
      attendedBy: 'Adrian Dario Bravo Luna',
    },
    {
      id: 5,
      name: 'Angel Eduardo Juarez Alvizo',
      phone: '4792203045',
      attendedBy: 'Alexa Guerrero Lopez',
    },
  ];
}
