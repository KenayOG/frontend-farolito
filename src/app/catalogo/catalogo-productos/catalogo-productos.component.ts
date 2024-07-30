import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css',
})
export class CatalogoProductosComponent {
  products: Recipe[] = [];  
}
