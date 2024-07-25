import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/user-role';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css',
})
export class EditarEmpleadoComponent implements OnInit {
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
