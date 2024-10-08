import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/user-role';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css',
})
export class EditarEmpleadoComponent implements OnInit {
  formEditEmployee!: FormGroup;
  employeeId!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private empleadoService: UsuariosService
  ) {}

  ngOnInit() {
    this.formEditEmployee = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      direccion: ['', Validators.required],
    });

    const employee = localStorage.getItem('selectedEmployee');
    if (employee) {
      const parsedEmployee = JSON.parse(employee);
      this.formEditEmployee.patchValue({
        fullName: parsedEmployee.fullName,
        email: parsedEmployee.email,
        phoneNumber: parsedEmployee.phoneNumber,
        direccion: parsedEmployee.direccion,
      });
    }

    //this.loadEmployeeData();
  }

  /* loadEmployeeData() {
    const employeeData = localStorage.getItem('selectedEmployee');
    if (employeeData) {
      const employee = JSON.parse(employeeData);

      this.formEditEmployee.patchValue({
        name: employee.fullName.split(' ')[0],
        lastName: employee.fullName.split(' ').slice(1).join(' '),
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        direccion: employee.direccion,
      })
    }
  } */

  editEmployee() {
    if (this.formEditEmployee.valid) {
      const updatedEmployee = this.formEditEmployee.value;
      this.empleadoService.editarUser(updatedEmployee).subscribe({
        next: () => {
          console.log('Empleado actualizado:', updatedEmployee);
          this.matSnackBar.open('Empleado actualizado exitosamente', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          localStorage.removeItem('selectedEmployee');
        },
        error: (error) => {
          this.matSnackBar.open(
            'Ha ocurrido un error al intentar actualizar el empleado',
            'Cerrar',
            {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            }
          );
          localStorage.removeItem('selectedEmployee');
        },
      });
    }
  }
}
