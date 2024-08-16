import { RecipeProduction, RecipeSteps } from './recipe-production';

export interface Production {
  id: number;
  descripcion: string;
  cantidad: number;
  estatus: string;
  nombreUsuario: string;
  receta: RecipeProduction;
}

export interface ProductionSolicitude {
  descripcion: string;
  cantidad: number;
  recetaId: number;
}

export interface ProductionReject {
  id: number;
  descripcion: string;
}

export interface ProductionHechas {
  id: number;
  fecha: string;
  costo: number;
  nombreUsuario: string;
  solicitudProduccion: Production;
}

export interface ProductionSteps {
  id: number;
  fecha: string;
  costo: number;
  nombreUsuario: string;
  solicitudProduccion: RecipeSteps;
}
