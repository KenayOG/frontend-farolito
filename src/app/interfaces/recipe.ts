import { ComponenteRecipe, ComponenteRecipeRequest, DeleteComponente } from './component-recipe';

export interface Recipe {
  id: number;
  nombrelampara: string;
  estatus: boolean;
  costoProduccion: number;
  imagen: string;
  componentes: ComponenteRecipe[];
}

export interface RecipeRequest {
  id: number;
  nombrelampara: string;
  estatus: boolean;
  componentes: ComponenteRecipeRequest[];
}


export interface DeleteRecipe {
  recetaId: number;
  estatusReceta: boolean;
  componentes: DeleteComponente[];
}

export interface RecipeSolicitude {
  id: number;
  nombrelampara: string;
}