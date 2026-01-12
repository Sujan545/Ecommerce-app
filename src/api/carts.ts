import type { Cart } from "../types/cart";
import { api } from "./axios";




export interface CartProduct {
  productId: number;
  quantity: number;
}





// ✅ Get all carts
export const getAllCarts = async (): Promise<Cart[]> => {
  const res = await api.get("/carts");
  return res.data;
};

// ✅ Get single cart
export const getSingleCart = async (cartId: number): Promise<Cart> => {
  const res = await api.get(`/carts/${cartId}`);
  return res.data;
};

// ✅ Add new cart
export const addNewCart = async (cart: Omit<Cart, "id">): Promise<Cart> => {
  const res = await api.post("/carts", cart);
  return res.data;
};

// ✅ Update cart
export const updateCart = async (
  cartId: number,
  cart: Partial<Cart>
): Promise<Cart> => {
  const res = await api.put(`/carts/${cartId}`, cart);
  return res.data;
};

// ✅ Delete cart
export const deleteCart = async (cartId: number): Promise<Cart> => {
  const res = await api.delete(`/carts/${cartId}`);
  return res.data;
};

