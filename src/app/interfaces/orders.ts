export interface Order {
  id: number;
  status: string;
  stage: string;
  dateTime: string;
  details: string;
}

export interface EstatusOrder{
  pedidoId: number;
}