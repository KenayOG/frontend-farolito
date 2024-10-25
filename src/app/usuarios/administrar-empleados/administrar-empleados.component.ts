import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-administrar-empleados',
  templateUrl: './administrar-empleados.component.html',
  styleUrl: './administrar-empleados.component.css',
})
export class AdministrarEmpleadosComponent {
  usuarios: User[] = [];
  cargando: boolean = true;
  @ViewChild('dtClientes') dtClientes!: Table;
  @ViewChild('dtEmpleados') dtEmpleados!: Table;

  constructor(
    private userService: UsuariosService,
    private router: Router,
    private matSnackbar: MatSnackBar,
    private modalService: NgbModal
  ) {
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

  obtenerEmpleado(employee: any) {
    localStorage.setItem('selectedEmployee', JSON.stringify(employee));

    this.router.navigate(['/editar-empleado']);
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtClientes' && this.dtClientes) {
      this.dtClientes.filterGlobal(filterValue, 'contains');
    } else if (tableId === 'dtEmpleados' && this.dtEmpleados) {
      this.dtEmpleados.filterGlobal(filterValue, 'contains');
    }
  }

  validateInput(event: KeyboardEvent) {
    const inputChar = event.key;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(inputChar)) {
      event.preventDefault();
    }
  }
}
