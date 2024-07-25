import { Component } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-administrar-empleados',
  templateUrl: './administrar-empleados.component.html',
  styleUrl: './administrar-empleados.component.css',
})
export class AdministrarEmpleadosComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Sergio de Jesus Salazar Cabrera',
      email: 'chekho@gmail.com',
      username: 'Chekho',
      password: '12345',
    },
    {
      id: 2,
      name: 'Jose Angel Ramirez Almeida',
      email: 'angel@gmail.com',
      username: 'Ramirez',
      password: '12345',
    },
    {
      id: 3,
      name: 'Adrian Dario Bravo Luna',
      email: 'dario@gmail.com',
      username: 'Dario',
      password: '12345',
    },
    {
      id: 4,
      name: 'Alexa Guerrero Lopez',
      email: 'alexa@gmail.com',
      username: 'Alexa',
      password: '12345',
    },
    {
      id: 5,
      name: 'Angel Eduardo Juarez Alvizo',
      email: 'alvizo@gmail.com',
      username: 'Alvizo',
      password: '12345',
    },
  ];
  customers: Customer[] = [
    {
      id: 1,
      name: 'Edgar Roberto Davila Lara',
      email: 'edgar@gmail.com',
      username: 'EdgarRoberto',
      password: '12345',
    },
    {
      id: 2,
      name: 'Angel Saul Alvarez Lopez',
      email: 'saul@gmail.com',
      username: 'saulLopez',
      password: '12345',
    },
    {
      id: 3,
      name: 'Mario Herrera Fonseca',
      email: 'mario@gmail.com',
      username: 'HerreraMario',
      password: '12345',
    },
    {
      id: 4,
      name: 'David Andres Montes Rocha',
      email: 'david@gmail.com',
      username: 'Davidddd',
      password: '12345',
    },
    {
      id: 5,
      name: 'Eduardo Fabian Islas Mares',
      email: 'lalin@gmail.com',
      username: 'Lalo12',
      password: '12345',
    },
  ];
}
