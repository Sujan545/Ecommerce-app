import { createContext, useContext, useState } from "react";
import type { product } from "../types/products";



type CartItem = product & { quantity: number };

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: product) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        })
    }
    const removeFromCart = (id: number) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}


export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};