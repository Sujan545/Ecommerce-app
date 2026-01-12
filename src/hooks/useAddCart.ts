import { useState } from "react";
import type { Cart } from "../types/cart";
import { addNewCart } from "../api/carts";

export const useAddCart = () => {
  const [loading, setLoading] = useState(false);

  const addCart = async (cart: Omit<Cart, "id">) => {
    setLoading(true);
    const res = await addNewCart(cart);
    setLoading(false);
    return res;
  };

  return { addCart, loading };
};
