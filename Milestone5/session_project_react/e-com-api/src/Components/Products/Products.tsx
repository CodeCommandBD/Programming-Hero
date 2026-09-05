import { use, useState } from "react";
import type { ProductType } from "../../Type";
import Product from "../Product/Product";

export interface ProductsProps {
  productPromise: Promise<ProductType[]>;
}

export default function Products({ productPromise }: ProductsProps) {
  const productData = use(productPromise);

  // console.log(productData);

  const [cartProduct, setCartProduct] = useState<ProductType[]>([]);

  const [singleProduct, setSingleProduct] = useState<ProductType | null>(null)

  const handleCartProduct = (product: ProductType): void => {
   
    const isExist = cartProduct.find(p => p.id === product.id);
    if(isExist){
        let remainder = cartProduct.filter((f)=>f.id !== product.id)
        setCartProduct(remainder)
    }else{
        const newProduct = [...cartProduct, product];
        setCartProduct(newProduct);
    }
  };

  const handleSingleProduct = (singlepro: ProductType): void => {

    if(singleProduct?.id === singlepro.id){
      setSingleProduct(null)
    }else{
      setSingleProduct(singlepro)
    }
  }

  

  return (
    <>
      <div className="flex justify-between">
        <h2>Count: {cartProduct.length} </h2>
        <div className="w-4/5 p-4 flex gap-4 flex-wrap">
           {
              cartProduct.map((single)=>{
                return <div className="border p-4 bg-amber-200 w-1/4" key={single.id}>
                  <h2>Product Name: {single.title}</h2>
                  <p>Product des: {single.description}</p>
                  <p>Product Price: {single.price}</p>
                </div>
              })
           }
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {productData.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleCartProduct={handleCartProduct}
              handleSingleProduct={handleSingleProduct}
            ></Product>
          );
        })}
      </ul>
    </>
  );
}
