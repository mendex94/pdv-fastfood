export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  type: string;
  orderQuantity: number;
}

export interface Order {
  orderItems: [] | Product[] | any;
  orderTotalQuantity: number;
  orderTotalAmount: number;
  clientName: string;
}
