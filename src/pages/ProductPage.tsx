import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts"
import ProductCard from "../utils/ProductCard"
import Pagination from "../utils/Pagination";

const ITEMS_PER_PAGE = 8;
export default function ProductPage() {
     const [selectedCategory, setSelectedCategory] = useState<string>("all");
     const [currentPage, setCurrentPage] = useState<number>(1);
    const { products, loading } = useProducts()
    const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

 
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

    if (loading) return <p>Loading...</p>
    return (
        <div className="px-6 md:py-6 ">
            <div className="flex gap-3 mb-10 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 text-sm border transition
                ${selectedCategory === cat
                                ? "bg-black text-white"
                                : "hover:bg-gray-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-col-1 bg-[#f6f6f4] md:grid grid-cols-4 gap-2 md:gap-6 items-end">
                {currentProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
            {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        </div>

    )
}