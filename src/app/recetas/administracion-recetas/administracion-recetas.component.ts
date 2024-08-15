import { Component, TemplateRef, ElementRef } from '@angular/core';
import { DeleteRecipe, Recipe, RecipeRequest } from '../../interfaces/recipe';
import { RecetasService } from '../../services/recetas.service';
import { Componente } from '../../interfaces/components';
import { ComponentesService } from '../../services/componentes.service';
import { ComponenteRecipeRequest } from '../../interfaces/component-recipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  selectedFile: File | null = null;
  currentRecetaId: number | null = null;
  recetaIdTemp!: number;

  constructor(
    private recetasService: RecetasService,
    private componentesListaService: ComponentesService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private modalService: NgbModal
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

  advertenciaEstatus(content: TemplateRef<any>, id: number): void {
    this.recetaIdTemp = id;
    this.modalService.open(content, {
      ariaLabelledBy: 'modalEstatusPedido',
    });
  }

  cancelarActualizacion() {
    this.modalService.dismissAll();
  }

  ActualizarEstatusReceta() {
    if (this.recetaIdTemp) {
      const requestBody: DeleteRecipe = {
        recetaId: this.recetaIdTemp,
        estatusReceta: false, // Cambia el estatus a false para eliminar lógicamente la receta
        componentes: [], // Lista vacía si no estás cambiando el estatus de los componentes
      };

      this.recetasService.deleteRecipe(requestBody).subscribe({
        next: (response) => {
          this.matSnackBar.open('Receta eliminada correctamente', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          this.obtenerRecetas(); // Actualiza la lista de recetas
          this.modalService.dismissAll(); // Cierra el modal después de la eliminación
        },
        error: (err) => {
          console.error('Error al eliminar la receta:', err);
          this.matSnackBar.open('Error al eliminar la receta', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        },
      });
    }
  }

  obtenerRecetas() {
    this.cargando = true;
    this.recetasService.getRecetas().subscribe({
      next: (data) => {
        //this.recipes = data; // -- todas las recetas
        this.recipes = data.filter((recipe) => recipe.estatus === true);
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

  cargarFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  subirFoto(recetaId: number) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('Id', recetaId.toString());
      formData.append('Imagen', this.selectedFile);
      this.recetasService.uploadImageRecipe(formData).subscribe({
        next: () => {
          this.matSnackBar.open('Imagen subida correctamente', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          this.obtenerRecetas();
          this.limpiarDataImg();
        },
        error: (error) => {
          console.error('Error al subir la imagen', error);
          this.matSnackBar.open('Error al subir la imagen', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          this.limpiarDataImg();
        },
      });
    } else {
      this.matSnackBar.open('Seleccione una imagen', 'Cerrar', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }

  limpiarDataImg() {
    this.selectedFile = null;
    this.currentRecetaId = null;
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

  editarReceta(receta: Recipe) {
    localStorage.setItem('recetaId', receta.id.toString());

    localStorage.setItem('recetaData', JSON.stringify(receta));

    this.router.navigate(['/editar-receta']);
  }
}
