import Banner from "../components/Bnner";
import Hero from "../components/Hero";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../utils/ProductCard";


export default function HomePage() {
  const {products,loading}=useProducts();
    if (loading) return <p>Loading...</p>;
  return (
  <>
  <Hero/>
  <div className="grid grid-col-1 md:grid-cols-4 gap-2 md:gap-6 items-end">
    {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
  </div>
  <Banner/>
  </>

  );
}
