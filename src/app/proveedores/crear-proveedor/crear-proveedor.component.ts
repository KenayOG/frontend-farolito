import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ProveedoresService } from '../../services/proveedores.service';
import { ValidationError } from '../../interfaces/validation-errors';
import { ComponentesService } from '../../services/componentes.service';
import { Componente } from '../../interfaces/components';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  formProvider!: FormGroup;
  errors!: ValidationError[];
  listaComponentes: Componente[] = [];

  constructor(
    private router: Router,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private proveedoresService: ProveedoresService,
    private componentesService: ComponentesService
  ) { }

  ngOnInit(): void {
    this.formProvider = this.fb.group({
      nombreEmpresa: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      apellidoP: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nombreAtiende: ['', [Validators.required]],
      apellidoM: ['', [Validators.required]],
      productosDescripcion: [''],
      componentes: this.fb.array([])
    });
  
    this.obtenerComponentes();
  }
  
  obtenerComponentes() {
    this.componentesService.getCatalogoComponentes().subscribe({
      next: (data) => {
        this.listaComponentes = data;
        const formArray = this.formProvider.get('componentes') as FormArray;
        formArray.clear();
        this.listaComponentes.forEach(() => formArray.push(this.fb.control(false)));
      },
      error: (e) => {
        console.log(e);
        this.matSnackBar.open('Error al obtener componentes', 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      },
    });
  }

  registerProvider() {
    console.log(this.formProvider.value);
    console.log(this.formProvider.status);
    console.log(this.formProvider.controls);

    if (this.formProvider.valid) {
      const formValue = this.formProvider.value;
      const selectedComponentes = this.listaComponentes
        .filter((_, index) => formValue.componentes[index])
        .map(component => ({ id: component.id, nombre: component.nombre }));

      const providerData = {
        ...formValue,
        productos: selectedComponentes,
        estatus: true
      };

      this.proveedoresService.regProveedores(providerData).subscribe({
        next: (response) => {
          console.log(response);
          this.matSnackBar.open("Proveedor registrado correctamente", 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
          this.router.navigate(['/proveedores']);
        },
        error: (err) => {
          console.error(err);
          this.matSnackBar.open('Error al registrar proveedor: ' + (err.error.message || 'Desconocido'), 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
          this.limpiarCampos();
        }
      });
    } else {
      this.matSnackBar.open('Formulario inválido. Por favor revisa los campos.', 'Cerrar', {
        duration: 5000,
        horizontalPosition: 'center'
      });
    }
  }

  limpiarCampos(): void {
    this.formProvider.reset();
    
    this.formProvider.patchValue({
      productosDescripcion: '',
      componentes: this.listaComponentes.map(() => false)
    });
    
    this.errors = [];
    this.obtenerComponentes();
  }
  
}
