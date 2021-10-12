import React from "react";
import { Basket } from "./Basket";
import { ProductDataType } from "./Product";
import { Products } from "./Products";
import "./index.css";
import { Subtotal } from "./Subtotal";

const products = [
  { id: 1, name: "RTX 3090", price: 24.99 },
  { id: 2, name: "Intel i9", price: 14.99 },
  { id: 3, name: "AMD Ryzen", price: 19.99 },
  { id: 4, name: "Nvidia GTX", price: 24.99 },
  { id: 5, name: "Intel i7", price: 14.99 },
  { id: 6, name: "Keyboard", price: 19.99 },
];

type AppType = {
  products?: ProductDataType[];
};

const App: React.FC<AppType> = (props) => {
  const [items, setItems] = React.useState([] as ProductDataType[]);
  return (
    <div>
      <h1>Products</h1>
      <Products
        products={props.products || products}
        onAddToCart={(product) => {
          setItems([...items, product]);
        }}
      />
      <h1>Basket</h1>
      <Basket items={items} />
      <h1>Subtotal</h1>
      <Subtotal items={items} />
    </div>
  );
};

export default App;
