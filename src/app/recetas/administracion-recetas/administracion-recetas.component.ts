import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';
import { ComponenteRecipe } from '../../interfaces/component-recipe';

@Component({
  selector: 'app-administracion-recetas',
  templateUrl: './administracion-recetas.component.html',
  styleUrl: './administracion-recetas.component.css',
})
export class AdministracionRecetasComponent implements OnInit {
  recipes: Recipe[] = [];
  filtradosComponentes: { [key: number]: ComponenteRecipe[] } = {};

  baseUrl: string = 'assets/images/';
  imageUrls: { [key: number]: string } = {};
  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetasService.getRecetas().subscribe((data) => {
      this.recipes = data;
      this.filtrarComponentes();
      this.recipes.forEach((recipe) => {
        this.imageUrls[recipe.id] = `${this.baseUrl}${recipe.imagen}`;
      });
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
