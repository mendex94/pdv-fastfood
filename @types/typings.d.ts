export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  type: string;
  orderQuantity: number;
  note?: string;
}

export interface Order {
  orderItems: Product[];
  orderTotalQuantity: number;
  orderTotalAmount: number;
  clientName: string;
  id?: number;
}
