import { ComponentRecipeRCompra } from "./component-recipe";

export interface Purchase {
    fecha: Date;
    proveedorId: number;
    detalles: ComponentRecipeRCompra[];
}
