import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/user-role';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationError } from '../../interfaces/validation-errors';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css'],
})
export class CrearEmpleadoComponent implements OnInit {

  roles: Role[] = [
    { name: 'Administrador' },
    { name: 'Logística' },
    { name: 'Produccion' },
    { name: 'Almacen' },
  ];
  selectedRol: Role | undefined;
  formEmployee!: FormGroup;
  errors!: ValidationError[];
  value: any;

  constructor(
    private router: Router,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formEmployee = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roles: [[], [Validators.required]]
    });
  }

  signUpEmployee() {
    const { name, lastName, password, email } = this.formEmployee.value;
    const fullName = `${name} ${lastName}`;

    const roleName = this.selectedRol?.name || '';

    const employeeData = {
      email,
      fullName,
      password,
      roles: [roleName]
    };

    this.authService.signUpEmployee(employeeData)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.matSnackBar.open("Cuenta creada correctamente", 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
          this.router.navigate(['/usuarios']);
        },
        error: (err: HttpErrorResponse) => {
          if (err!.status === 400) {
            this.errors = err!.error;
            this.matSnackBar.open('Algo salió mal, inténtalo de nuevo', 'Cerrar', {
              duration: 5000,
              horizontalPosition: 'center'
            });
            setTimeout(() => {
              this.errors = [];
            }, 3000);
          } else if (err!.status === 401) {
            this.matSnackBar.open('No autorizado. Verifica tus credenciales.', 'Cerrar', {
              duration: 5000,
              horizontalPosition: 'center'
            });
          }
        },
        complete: () => console.log('Registro exitoso'),
      });
  }
}
