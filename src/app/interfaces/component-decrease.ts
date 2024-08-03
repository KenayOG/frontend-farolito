export interface ComponenteDecrease {
  id: number;
  cantidad: number;
  descripcion: string;
  fecha: string;
  usuario: string;
  componente: string;
}

export interface ComponenteDecreaseRequest {
  cantidad: number;
  descripcion: string;
  inventarioComponenteId: number;
}