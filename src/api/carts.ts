import type { Cart } from "../types/cart";
import { api } from "./axios";




 export const getCarts = async ():Promise<Cart[]>=>{
    const res= await api.get("/carts")
    return res.data;
 }

  export const getCartById = async (id:number):Promise<Cart>=>{
    const res= await api.get(`/carts${id}`)
    return res.data;
 }