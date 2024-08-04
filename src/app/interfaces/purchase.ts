import { DetalleCompra } from "./component-recipe";

export interface Purchase {
    fecha: string;
    proveedorId: number;
    detalles: DetalleCompra[];
}
