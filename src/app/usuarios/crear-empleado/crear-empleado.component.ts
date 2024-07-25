import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/user-role';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrl: './crear-empleado.component.css',
})
export class CrearEmpleadoComponent implements OnInit {
  value!: string;
  roles: Role[] | undefined;
  selectedRol: Role | undefined;

  ngOnInit() {
    this.roles = [
      { name: 'Administrador' },
      { name: 'Logistica' },
      { name: 'Produccion' },
      { name: 'Almacen' },
    ];
  }
}
