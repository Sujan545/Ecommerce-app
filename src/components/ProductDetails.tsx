import { useCart } from "../context/CartContext";
import type { product } from "../types/products";


interface ProductDetailsProps {
    product: product;
}

const ProductDetailsCard = ({ product }: ProductDetailsProps) => {

    const { addToCart } = useCart();
    return (
        <div className=" mx-auto  rounded-lg shadow md:py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="relative bg-gray-100 rounded-lg p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-96 object-contain"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 text-sm">
                        {product.description}
                    </p>

                    <p className="text-2xl font-bold text-black">
                        ${product.price}
                    </p>
                    <div className=" flex  items-center gap-4">
                        {product.rating && (
                            <div className=" bg-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow">
                                <span className="text-yellow-800">⭐</span>
                                {product.rating.rate}
                            </div>
                        )}
                        {product.rating && (
                            <span className="text-sm text-gray-500">
                                ({product.rating.count} reviews)
                            </span>
                        )}
                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault(); 
                            addToCart(product);
                        }}
                        className="mt-4 w-fit px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailsCard;
