import { useEffect, useState } from "react"
import type { product } from "../types/products"
import { getProducts } from "../api/products"




export const useProducts = () => {
    const [products, setProducts] = useState<product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .finally(() => setLoading(false))

    }, [])
    return { products, loading };
}