import { useEffect, useState } from "react"
import type { Cart } from "../types/cart";
import { getAllCarts } from "../api/carts";

export const useCarts = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllCarts()
      .then(setCarts)
      .catch(() => setError("Failed to load carts"))
      .finally(() => setLoading(false));
  }, []);

  return { carts, loading, error };
};
