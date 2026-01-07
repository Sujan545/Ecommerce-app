import ProductDetailsCard from "../components/ProductDetails";
import { useProduct } from "../hooks/useProduct";





export default function ProductDetailsPage() {
    const { product, loading } = useProduct();

    if (loading) return <p className="p-6">Loading...</p>;
    if (!product) return <p className="p-6">Product not found</p>;

    return (
      <ProductDetailsCard product={product}/> 

    )
}