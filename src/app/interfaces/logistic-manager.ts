import { OrderProduct } from './order-product';

export interface LogisticManager {
  id: number;
  fechaPedido: string;
  fechaEnvio: string;
  fechaEntrega: string;
  fechaEntregaAprox: string;
  estatus: string;
  usuarioId: string;
  nombreUsuario: string;
  productos: OrderProduct[];
}
