import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../utils/ProductCard";
import { useProducts } from "../hooks/useProducts";
import Pagination from "../utils/Pagination";
import Banner from "../components/Bnner";
import type { product } from "../types/products";

const ITEMS_PER_PAGE = 4;

export default function HomePage() {
  const { products, loading } = useProducts();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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

  if (loading) return <p className="text-center py-20">Loading...</p>;
  return (
    <>
      <Hero />

      <section className=" mx-auto px-6 py-10">

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((p: product) => (
            <ProductCard key={p.id} product={p} />
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
      </section>

      <Banner />
    </>
  );
}
