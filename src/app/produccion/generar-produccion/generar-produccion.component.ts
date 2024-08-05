import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../../interfaces/recipe';
import { ProductionSolicitude } from '../../interfaces/production';
import { RecetasService } from '../../services/recetas.service';
import { ProduccionService } from '../../services/produccion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generar-produccion',
  templateUrl: './generar-produccion.component.html',
  styleUrls: ['./generar-produccion.component.css']
})
export class GenerarProduccionComponent {

  recipes: Recipe[] = [];
  cargando: boolean = true;
  produccionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recetasService: RecetasService,
    private produccionService: ProduccionService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.produccionForm = this.fb.group({
      descripcion: ['', Validators.required],
      cantidad: ['', [Validators.required]],
      recetaId: ['', Validators.required]
    });
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.cargando = true;
    this.recetasService.getRecetas().subscribe({
      next: (data) => {
        this.recipes = data;
        this.cargando = false;
      },
      error: (e) => {
        console.log(e);
        this.cargando = false;
      },
    });
  }

  crearSolicitudProduccion() {
    if (this.produccionForm.valid) {
      const nuevaSolicitud: ProductionSolicitude = this.produccionForm.value;
      this.produccionService.createProdSolicitude(nuevaSolicitud).subscribe({
        next: (response) => {
          console.log('Solicitud de producción creada exitosamente:', response);
          this.matSnackBar.open(response.message, 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
          this.router.navigate(['/produccion']);
        },
        error: (err) => {
          console.error('Error al crear la solicitud de producción:', err);
          this.matSnackBar.open('Ocurrió un problema: ' + (err.error.message || 'Desconocido'), 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
        }
      });
    } else {
      console.warn('Formulario inválido');
      this.matSnackBar.open('Formulario inválido', 'Cerrar', {
        duration: 5000,
        horizontalPosition: 'center'
      });
    }
  }
}
