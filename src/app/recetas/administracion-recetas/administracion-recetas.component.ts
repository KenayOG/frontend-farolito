import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';
import { Componente } from '../../interfaces/components';
import { ComponentesService } from '../../services/componentes.service';

@Component({
  selector: 'app-administracion-recetas',
  templateUrl: './administracion-recetas.component.html',
  styleUrl: './administracion-recetas.component.css',
})
export class AdministracionRecetasComponent {
  
  recipes: Recipe[] = [];
  listaComponentes: Componente[] = [];
  baseUrl: string = 'https://localhost:5000';
  cargando: boolean = true;

  constructor(
    private recetasService: RecetasService,
    private componentesListaService: ComponentesService
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
}
