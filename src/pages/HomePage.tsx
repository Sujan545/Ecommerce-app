import { useState } from "react";

import Hero from "../components/Hero";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../utils/ProductCard";
import Pagination from "../utils/Pagination";
import Banner from "../components/Bnner";


const ITEMS_PER_PAGE = 4;

export default function HomePage() {
  const { products, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>

      <Banner />
    </>
  );
}
