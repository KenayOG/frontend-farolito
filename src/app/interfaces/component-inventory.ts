import { ComponentDetail } from './component-detail';

export interface ComponentInventory {
  id: number;
  nombre: string;
  existencia: number;
  detalles: ComponentDetail[];
}
