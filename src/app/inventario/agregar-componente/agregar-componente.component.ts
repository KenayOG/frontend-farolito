import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ComponentesService } from '../../services/componentes.service';
import { ComponenteRequest } from '../../interfaces/components';

@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent {

  componenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private componentesService: ComponentesService
  ) {
    this.componenteForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  createComponente() {
    if (this.componenteForm.valid) {
      const nombreValue = this.componenteForm.get('nombre')?.value;
      
      if (nombreValue) {
        const componenteData: ComponenteRequest = { id: 0, nombre: nombreValue };
        this.componentesService.createComponente(componenteData).subscribe({
          next: (response) => {
            this.matSnackBar.open(response.message, 'Cerrar', {
              duration: 3000,
            });
            this.router.navigate(['/inventario']);
          },
          error: (err) => {
            this.matSnackBar.open('Error al agregar el componente', 'Cerrar', {
              duration: 3000,
            });
            console.error('Error:', err);
          }
        });
      }
    }
  }
}