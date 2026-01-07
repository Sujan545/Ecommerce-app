import type { product } from "../types/products";
import { api } from "./axios";



export const getProducts= async():Promise<product[]>=>{
    const res= await api.get("/products");
    return res.data;
};



export const getProductById = async(id:number): Promise<product>=>{
    const res = await api.get(`/products/${id}`)
    return res.data;
};