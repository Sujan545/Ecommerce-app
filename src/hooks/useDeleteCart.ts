import { useState } from "react";
import { deleteCart } from "../api/carts";


export const useDeleteCart = () => {
  const [loading, setLoading] = useState(false);

  const remove = async (cartId: number) => {
    setLoading(true);
    await deleteCart(cartId);
    setLoading(false);
  };

  return { remove, loading };
};
