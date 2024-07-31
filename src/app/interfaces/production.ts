import { RecipeProduction } from './recipe-production';

export interface Production {
  id: number;
  descripcion: string;
  cantidad: number;
  estatus: number;
  nombreUsuario: string;
  receta: RecipeProduction;
}
