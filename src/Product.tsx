import React from "react";

export type ProductDataType = {
  id: number;
  name: string;
  price: number;
};

type ProductType = {
  product: ProductDataType;
  onClick?: () => void;
};

export const Product: React.FC<ProductType> = ({
  product: { name, id, price },
  onClick,
}) => {
  return (
    <div className="product" data-testid={`product-${id}`}>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <button onClick={onClick}>Add to cart</button>
    </div>
  );
};
