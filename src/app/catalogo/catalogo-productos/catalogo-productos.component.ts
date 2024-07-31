import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css',
})
export class CatalogoProductosComponent {
  products: Recipe[] = [];
  cargando: boolean = true;

  constructor(private catalogoRecetaService: RecetasService) {
    this.obtenerCatalogoProducto();
  }

  obtenerCatalogoProducto() {
    this.cargando = true;
    this.catalogoRecetaService.getRecetas().subscribe({
      next: (data) => {
        this.products = data;
        this.cargando = false;
      },
      error: (e) => {
        console.log(e);
        this.cargando = false;
      },
    });
  }
}
