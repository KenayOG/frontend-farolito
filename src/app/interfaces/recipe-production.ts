import { RecipeSolicitude } from "./recipe";

export interface RecipeProduction {
  id: number;
  nombrelampara: string;
}

export interface RecipeSteps {
    id: number;
    descripcion: string;
    cantidad: number;
    estatus: string;
    nombreUsuario: String;
    receta: RecipeSolicitude;
}