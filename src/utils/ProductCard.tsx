import { Link } from "react-router-dom";
import type { product } from "../types/products";

interface ProductCardProps {
    product: product;
}

export default function ProductCard({ product }: ProductCardProps) {

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