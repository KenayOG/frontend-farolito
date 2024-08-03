export interface LampDecrease {
  id: number;
  cantidad: number;
  descripcion: string;
  fecha: string;
  usuario: string;
  lampara: string;
}

export interface LampDecreaseRequest {
  cantidad: number;
  descripcion: string;
  inventariolamparaId: number;
}