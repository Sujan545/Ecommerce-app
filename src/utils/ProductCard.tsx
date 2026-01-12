import { Link } from "react-router-dom";
import type { product } from "../types/products";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";


interface ProductCardProps {
    product: product;
    addToCart: (product: product) => void;
}

export default function ProductCard({ product}: ProductCardProps) {

    const { addToCart } = useCart();
    const { user, openLoginModal } = useAuth();
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!user) {
            // If user not logged in, open login modal
            openLoginModal();
            return;
        }

        // Add product to cart
        addToCart({
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    };
    return (
        <div className="group w-full max-w-sm mx-auto">
            <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden bg-gray-100 rounded-lg">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.rating && (
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow">
                            <span className="text-yellow-500">⭐</span>
                            {product.rating.rate}
                        </div>
                    )}
                    <button
                     onClick={handleAddToCart}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2
                    w-10 h-8 rounded-lg bg-gray-300 text-black text-xl
                    flex items-center justify-center
                    opacity-0 translate-y-4 scale-90
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:scale-100
                    transition-all duration-300 ease-out
                    z-10"
                        aria-label="Add to cart"
                    >
                        +
                    </button>

                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="px-3 pt-4 flex justify-between items-start gap-4">
                    <div>
                        <h3 className="text-sm font-medium tracking-wide line-clamp-1">
                            {product.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                            {product.description
                                ?.split(" ")
                                .slice(0, 5)
                                .join(" ")}
                            ...
                        </p>
                    </div>

                    <p className="text-sm font-semibold whitespace-nowrap">
                        ${product.price}
                    </p>
                </div>
            </Link>
        </div>

    )
}