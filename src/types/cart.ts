import type { product } from "./products";


export interface Cart {
id:number;
userId:number;
products:product[]
}