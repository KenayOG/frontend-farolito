import { DetalleCompra } from './component-recipe';

export interface Purchase {
  fecha: string;
  proveedorId: number;
  detalles: DetalleCompra[];
}

export interface PurchaseAll {
  id: number;
  fecha: string;
  usuarioNombre: string;
  detalles: PurchaseDetail[];
}

export interface PurchaseDetail {
  id: number;
  cantidad: number;
  costo: number;
  nombreComponente: string;
}
