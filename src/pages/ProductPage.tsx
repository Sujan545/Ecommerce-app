import { useProducts } from "../hooks/useProducts"
import ProductCard from "../utils/ProductCard"


export default function ProductPage() {
    const { products, loading } = useProducts()
    if (loading) return <p>Loading...</p>
    return (
        <div className="px-6 md:py-20 ">

            <div className="grid grid-col-1 bg-[#f6f6f4] md:grid grid-cols-4 gap-2 md:gap-6 items-end">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>

    )
}