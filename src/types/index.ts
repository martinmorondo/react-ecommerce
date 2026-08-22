export interface Product {
  id: string | number;
  name: string;
  price: number;
  cover: string;
  discount?: number; 
}

export interface CartItem extends Product {
  qty: number;
}