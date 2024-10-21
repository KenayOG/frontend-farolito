export interface Cart {
  lamparaId: number;
  urlImage: string;
  lamparaNombre: string;
  cantidad: number;
  estatus: string;
}

export interface CartRequest {
  recetaId: number;
  cantidad: number;
}

export interface CartRemove {
  id: number
}

export interface CartUpdated{
  recetaId: number;
  nuevaCantidad: number;
}