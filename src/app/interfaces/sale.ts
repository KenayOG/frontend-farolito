export interface Sale {
  id: number;
  customer: string;
  productSold: string;
  dateTime: string;
  cost: number;
  email: string;
  paymentType: string;
}

export interface SaleRequestList {
  id: number;
  cantidad: number;
}
