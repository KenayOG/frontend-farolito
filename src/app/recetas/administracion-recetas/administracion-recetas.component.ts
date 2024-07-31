import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';
import { ComponenteRecipe } from '../../interfaces/component-recipe';
import { Componente } from '../../interfaces/components';
import { CatalogoComponentesService } from '../../services/catalogo-componentes.service';

@Component({
  selector: 'app-administracion-recetas',
  templateUrl: './administracion-recetas.component.html',
  styleUrl: './administracion-recetas.component.css',
})
export class AdministracionRecetasComponent {
  recipes: Recipe[] = [];
  filtradosComponentes: { [key: number]: ComponenteRecipe[] } = {};
  listaComponentes: Componente[] = [];
  baseUrl: string = 'https://localhost:5000';
  cargando: boolean = true;
  constructor(
    private recetasService: RecetasService,
    private componentesListaService: CatalogoComponentesService
  ) {
    this.obtenerComponentes();
    this.obtenerRecetas();
  }

  obtenerComponentes() {
    this.componentesListaService.getCatalogoComponentes().subscribe({
      next: (data) => {
        this.listaComponentes = data;
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
        this.filtrarComponentes();
        this.cargando = false;
      },
      error: (e) => {
        console.log(e);
        this.cargando = false;
      },
    });
  }

  filtrarComponentes(): void {
    this.filtradosComponentes = {};
    this.recipes.forEach((recipe) => {
      if (recipe.componentes && Array.isArray(recipe.componentes)) {
        this.filtradosComponentes[recipe.id] = recipe.componentes;
      } else {
        this.filtradosComponentes[recipe.id] = [];
      }
    });
  }

  getImagen(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }
}
