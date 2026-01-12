import { useState } from "react";
import { updateCart } from "../api/carts";
import type { Cart } from "../types/cart";


export const useUpdateCart = () => {
  const [loading, setLoading] = useState(false);

  const update = async (cartId: number, cart: Partial<Cart>) => {
    setLoading(true);
    const res = await updateCart(cartId, cart);
    setLoading(false);
    return res;
  };

  return { update, loading };
};
