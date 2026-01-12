import { useEffect, useState } from "react";

import type { Cart } from "../types/cart";
import { getSingleCart } from "../api/carts";

export const useCart = (cartId?: number) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cartId) return;

    getSingleCart(cartId)
      .then(setCart)
      .finally(() => setLoading(false));
  }, [cartId]);

  return { cart, loading };
};
