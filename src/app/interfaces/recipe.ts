import { ComponenteRecipe } from './component-recipe';

export interface Recipe {
  id: number;
  nombrelampara: string;
  estatus: boolean;
  costoProduccion: number;
  imagen: string;
  componentes: ComponenteRecipe[];
}
