import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem } from "../types/cart";
import type { product } from "../types/products";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
   addProductToCart: (product: product) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  clearCart: () => void; // ✅ Add clearCart here
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Optional: load from localStorage for persistence
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (item: CartItem) => {
    const exists = cart.find((i) => i.productId === item.productId);
    if (exists) {
      saveCart(
        cart.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      saveCart([...cart, { ...item, quantity: 1 }]);
    }
  };

    const addProductToCart = (product: product) => {
    addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };


  const increase = (id: number) => {
    saveCart(
      cart.map((i) =>
        i.productId === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrease = (id: number) => {
    saveCart(
      cart.map((i) =>
        i.productId === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  const remove = (id: number) => {
    saveCart(cart.filter((i) => i.productId !== id));
  };

  const clearCart = () => {
    saveCart([]); // ✅ clears entire cart
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, remove, clearCart,addProductToCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
