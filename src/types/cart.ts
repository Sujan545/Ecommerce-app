import type { product } from "./products";


export interface Cart {
id:number;
userId:number;
products:product[]
}

export interface CartItem {
  productId: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
