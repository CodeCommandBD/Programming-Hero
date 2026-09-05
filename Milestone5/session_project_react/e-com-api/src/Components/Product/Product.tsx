import type { ProductType } from "../../Type";
import "./Product.css";

export interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  console.log(product);

   const ratingPercent = (product.rating.rate / 5) * 100;

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
      </div>
    </article>
  );
}
