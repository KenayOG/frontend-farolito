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
export class AdministracionRecetasComponent implements OnInit {
  recipes: Recipe[] = [];
  filtradosComponentes: { [key: number]: ComponenteRecipe[] } = {};
  listaComponentes: Componente[] = [];

  constructor(
    private recetasService: RecetasService,
    private componentesListaService: CatalogoComponentesService
  ) {
    this.obtenerComponentes();
    this.obtenerRecetas();
  }

  ngOnInit(): void {}

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
    this.recetasService.getRecetas().subscribe({
      next: (data) => {
        this.recipes = data;
        this.filtrarComponentes();
      },
      error: (e) => {
        console.log(e);
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
}
