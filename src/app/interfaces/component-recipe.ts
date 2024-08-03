export interface ComponenteRecipe {
  id: number;
  nombre: string;
  cantidad: number;
  estatus: boolean;
  precioUnitario: number;
  precioTotal: number;
}

export interface ComponenteRecipeRequest {
  id: number;
  cantidad: number;
}

export interface ComponentRecipeRCompra {
  componentesId: number;
  cantidad: number;
  costo: number;
}
