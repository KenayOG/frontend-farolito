import { ComponenteRecipe, ComponenteRecipeRequest } from './component-recipe';

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
