import { use } from "react"
import type { ProductType } from "../../Type"
import Product from "../Product/Product";

export interface ProductsProps {
    productPromise: Promise<ProductType[]>
}

export default function Products({ productPromise}: ProductsProps) {

    const productData = use(productPromise)

    // console.log(productData);
    
    
    return (
        <>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {
                productData.map((product)=>{
                    return <Product key={product.id} product={product}></Product>
                })
            }
        </ul>
        </>
    )
}