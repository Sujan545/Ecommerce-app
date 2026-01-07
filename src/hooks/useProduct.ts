import { useEffect, useState } from "react"
import type { product } from "../types/products"
import { getProductById } from "../api/products"
import { useParams } from "react-router-dom"




export const useProduct = () => {
    const {id}= useParams<{id:string}>();
    const ProductId = Number(id);
    const [product, setProduct] = useState<product | null >(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(!id) return
        setLoading(true)
        getProductById(ProductId)
            .then((data)=>setProduct(data))
            .finally(() => setLoading(false))

    }, [ProductId])
    return { product, loading };
}