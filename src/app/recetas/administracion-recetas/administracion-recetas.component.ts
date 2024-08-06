import { Component } from '@angular/core';
import { Recipe, RecipeRequest } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';
import { Componente } from '../../interfaces/components';
import { ComponentesService } from '../../services/componentes.service';
import { ComponenteRecipeRequest } from '../../interfaces/component-recipe';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-administracion-recetas',
  templateUrl: './administracion-recetas.component.html',
  styleUrls: ['./administracion-recetas.component.css'],
})
export class AdministracionRecetasComponent {
  recipes: Recipe[] = [];
  listaComponentes: Componente[] = [];
  baseUrl: string = 'https://localhost:5000';
  cargando: boolean = true;
  selectedComponents = new Set<any>();
  cantidadRequerida: { [key: number]: number } = {};
  nombreReceta: string = '';

  constructor(
    private recetasService: RecetasService,
    private componentesListaService: ComponentesService,
    private matSnackBar: MatSnackBar
  ) {
    this.obtenerComponentes();
    this.obtenerRecetas();
  }

  obtenerComponentes() {
    this.componentesListaService.getCatalogoComponentes().subscribe({
      next: (data) => {
        //this.listaComponentes = data; // -- todos los componentes
        this.listaComponentes = data.filter((lista) => lista.estatus === true);
      },
      error: (e) => {
        console.log(e);
      },
    });
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

  getImagen(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }

  onCheckboxChange(event: any, component: any) {
    if (event.checked) {
      this.selectedComponents.add(component);
      this.cantidadRequerida[component.id] =
        this.cantidadRequerida[component.id] || 0;
    } else {
      this.selectedComponents.delete(component);
      delete this.cantidadRequerida[component.id];
    }
  }

  isComponentSelected(component: any): boolean {
    return this.selectedComponents.has(component);
  }

  crearReceta() {
    const componentesSeleccionados: ComponenteRecipeRequest[] = Array.from(
      this.selectedComponents
    ).map((component) => ({
      id: component.id,
      cantidad: this.cantidadRequerida[component.id] || 0,
    }));

    const receta: RecipeRequest = {
      id: 0,
      nombrelampara: this.nombreReceta,
      estatus: true,
      componentes: componentesSeleccionados,
    };

    this.recetasService.createRecipe(receta).subscribe({
      next: (response) => {
        console.log('Receta creada con éxito:', response);
        this.obtenerRecetas();
        this.limpiarCampos();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
        });
      },
      error: (err) => {
        console.log('Error al crear receta:', err);
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
          }
        );
      },
    });
  }

  limpiarCampos() {
    this.nombreReceta = '';
    this.selectedComponents.clear();
    this.cantidadRequerida = {};
  }
}
