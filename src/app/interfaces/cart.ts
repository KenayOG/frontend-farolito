export interface Cart {
  lamparaid: number;
  urlImage: string;
  lamparaNombre: string;
  cantidad: number;
  esattus: string;
}

export interface CartRequest {
  recetaId: number;
  cantidad: number;
}