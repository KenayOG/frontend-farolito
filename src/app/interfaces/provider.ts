import { ProductProvider } from './product-provider';

export interface Provider {
  id: number;
  nombreEmpresa: string;
  dirección: string;
  teléfono: string;
  nombreAtiende: string;
  apellidoM: string;
  apellidoP: string;
  estatus: boolean;
  productos: ProductProvider[];
}
