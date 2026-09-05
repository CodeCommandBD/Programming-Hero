import { useState } from "react";
import type { ProductType } from "../../Type";
import "./Product.css";

export interface ProductProps {
  product: ProductType;
  handleCartProduct: (product: ProductType)=>void
  handleSingleProduct: (singlepro: ProductType)=> void
}

export default function Product({ product,handleCartProduct,handleSingleProduct }: ProductProps) {

 
  
  const [addtocart, setAddtocart] = useState<boolean>(false)

   const ratingPercent = (product.rating.rate / 5) * 100;

   const handleAddtoCart = () =>{
        setAddtocart(!addtocart)
        handleCartProduct(product)
        handleSingleProduct(product)
   }

  return (
    <article className="pc-card">
      <div className="pc-media">
        <img
          src={product.image}
          alt={product.title}
          className="pc-image"
          loading="lazy"
        />
        <span className="pc-tag">{product.category}</span>
      </div>

      <div className="pc-body">
        <h3 className="pc-title">{product.title}</h3>
        <p className="pc-description">{product.description}</p>

        <div className="pc-footer">
          <span className="pc-price">${product.price.toFixed(2)}</span>
           <div className="pc-rating" title={`${product.rating.rate} out of 5`}>
            <div
              className="pc-stars"
              style={{ ["--pc-rating-percent" as string]: `${ratingPercent}%` }}
            >
              ★★★★★
            </div>
            <span className="pc-rating-count">({product.rating.count})</span>
          </div>
        </div>
        <button onClick={handleAddtoCart} className="border p-3 bg-green-800 text-white hover:cursor-pointer "> {addtocart ? "Added" : "Add to Cart "}</button>
      </div>
    </article>
  );
}
