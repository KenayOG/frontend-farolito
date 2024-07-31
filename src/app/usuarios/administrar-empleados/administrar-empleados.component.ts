import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-administrar-empleados',
  templateUrl: './administrar-empleados.component.html',
  styleUrl: './administrar-empleados.component.css',
})
export class AdministrarEmpleadosComponent {
  clientes: User[] = [];
  empleados: User[] = [];
  //cargando: boolean = true;

  constructor(private userService: UsuariosService) {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    //this.cargando = true;
    this.userService.getUsuarios().subscribe({
      next: (data) => {
        this.separarUsuarios(data);
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

  separarUsuarios(usuarios: User[]) {
    usuarios.forEach((usuario) => {
      if (usuario.roles.includes('Cliente')) {
        this.clientes.push(usuario);
      } else {
        this.empleados.push(usuario);
      }
    });
  }
}
