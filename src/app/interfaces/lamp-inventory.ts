import { LampDetail } from './lamp-detail';

export interface LampInventory {
  id: number;
  nombrelampara: string;
  existencias: number;
  costo: number;
  urlImage: string;
  detalles: LampDetail[];
}
