import React from "react";
import { Product, ProductDataType } from "./Product";

type ProductsType = {
  products: ProductDataType[];
  onAddToCart?: (product: ProductDataType) => void;
};

export const Products: React.FC<ProductsType> = ({ products, onAddToCart }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} data-testid="product">
            <Product product={product} onClick={() => onAddToCart?.(product)} />
          </div>
        );
      })}
    </div>
  );
};
