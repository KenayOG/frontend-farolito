import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-administrar-empleados',
  templateUrl: './administrar-empleados.component.html',
  styleUrl: './administrar-empleados.component.css',
})
export class AdministrarEmpleadosComponent {
  usuarios: User[] = [];
  cargando: boolean = true;

  constructor(private userService: UsuariosService) {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.cargando = true;
    this.userService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
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

  get empleados() {
    return this.usuarios.filter(
      (usuario) => !usuario.roles.includes('Cliente')
    );
  }

  get clientes() {
    return this.usuarios.filter((usuario) => usuario.roles.includes('Cliente'));
  }
}
