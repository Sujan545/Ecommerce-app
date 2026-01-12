import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../utils/ProductCard";
import Pagination from "../utils/Pagination";
import type { CartItem } from "../types/cart";
import type { product } from "../types/products";

const ITEMS_PER_PAGE = 8;

export default function ProductPage() {
  const { products, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // 🛒 CART STATE
  const [cart, setCart] = useState<CartItem[]>([]);

  // ➕ ADD TO CART FUNCTION
  const addToCart = (product: product) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.productId === product.id
      );

      if (existing) {
        return prev.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  };

  // 🧠 Categories
  const categories = [
    "all",
    ...Array.from(new Set(products.map(p => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-6 md:py-6">
      {/* Categories */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-sm border transition
              ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#f6f6f4]">
        {currentProducts.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}   // ✅ PASS HERE
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Debug (optional) */}
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
    </div>
  );
}
