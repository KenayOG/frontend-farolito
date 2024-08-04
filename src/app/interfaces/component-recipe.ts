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

export interface DetalleCompra {
  componentesId: number;
  cantidad: number;
  costo: number;
}
