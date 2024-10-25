import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recipe, RecipeRequest } from '../../interfaces/recipe';
import { Componente } from '../../interfaces/components';
import { RecetasService } from '../../services/recetas.service';
import { ComponentesService } from '../../services/componentes.service';
import { ComponenteRecipeRequest } from '../../interfaces/component-recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-recetas',
  templateUrl: './editar-recetas.component.html',
  styleUrl: './editar-recetas.component.css',
})
export class EditarRecetasComponent implements OnInit {
  nombreReceta: string = '';

  listaComponentes: Componente[] = [];
  cantidadRequerida: { [key: number]: number } = {};
  selectedComponents = new Set<number>();
  recetaId: number = 0;

  recetaImagen: string = '';
  baseUrl: string = 'https://localhost:5000';

  constructor(
    private recetasService: RecetasService,
    private componentesListaService: ComponentesService,
    private matSnackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.obtenerComponentes();
    this.cargarDatosReceta();
  }

  obtenerComponentes() {
    this.componentesListaService.getCatalogoComponentes().subscribe({
      next: (data) => {
        this.listaComponentes = data.filter((lista) => lista.estatus === true);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  cargarDatosReceta() {
    const recetaData = localStorage.getItem('recetaData');
    if (recetaData) {
      const receta: Recipe = JSON.parse(recetaData);
      this.nombreReceta = receta.nombrelampara;
      this.recetaId = receta.id;
      this.recetaImagen = receta.imagen;

      receta.componentes.forEach((comp) => {
        this.selectedComponents.add(comp.id);
        this.cantidadRequerida[comp.id] = comp.cantidad;
      });

      this.listaComponentes.forEach((component) => {
        if (this.cantidadRequerida[component.id] > 0) {
          this.selectedComponents.add(component.id);
        }
      });
    }
  }
  isComponentSelected(component: Componente): boolean {
    return this.selectedComponents.has(component.id);
  }

  getImagen(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }

  onCheckboxChange(event: any, component: Componente) {
    if (event.target.checked) {
      this.selectedComponents.add(component.id);

      if (this.cantidadRequerida[component.id] === undefined) {
        this.cantidadRequerida[component.id] = 0;
      }
    } else {
      this.selectedComponents.delete(component.id);
      delete this.cantidadRequerida[component.id];
    }
  }

  guardarReceta() {
    const componentesSeleccionados: ComponenteRecipeRequest[] = Array.from(
      this.selectedComponents
    ).map((id) => ({
      id,
      cantidad: this.cantidadRequerida[id] || 0,
    }));

    const receta: RecipeRequest = {
      id: this.recetaId,
      nombrelampara: this.nombreReceta,
      estatus: true,
      componentes: componentesSeleccionados,
    };

    this.recetasService.updateRecipe(receta).subscribe({
      next: (response) => {
        console.log('Receta actualizada con éxito:', response);
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
        });
        this.route.navigate(['/recetas']);
      },
      error: (err) => {
        console.log('Error al actualizar receta:', err);
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
          }
        );
        this.route.navigate(['/recetas']);
      },
    });
  }
}
