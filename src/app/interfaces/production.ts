import { RecipeProduction } from './recipe-production';

export interface Production {
  id: number;
  descripcion: string;
  cantidad: number;
  estatus: number;
  nombreUsuario: string;
  receta: RecipeProduction;
}

export interface ProductionSolicitude {
  descripcion: string;
  cantidad: number;
  recetaId: number;
}

export interface ProductionHechas {
  id: number;
  fecha: string;
  costo: number;
  nombreUsuario: string;
  solicitudProduccion: Production;
}
