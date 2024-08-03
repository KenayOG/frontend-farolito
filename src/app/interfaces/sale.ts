export interface Sale {
  id: number;
  customer: string;
  productSold: string;
  dateTime: string;
  cost: number;
  email: string;
  paymentType: string;
}

export interface SaleRequest {
  id: number;
  cantidad: number;
}

export interface SaleRequestList {
  sales: SaleRequest[];
}
