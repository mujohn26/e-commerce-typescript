import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Products } from "./Products";

const products = [
  { id: 1, name: "RTX 3090", price: 24.99 },
  { id: 2, name: "Intel i9", price: 14.99 },
  { id: 3, name: "AMD Ryzen", price: 19.99 },
  { id: 4, name: "Nvidia GTX", price: 24.99 },
  { id: 5, name: "Intel i7", price: 14.99 },
  { id: 6, name: "Keyboard", price: 19.99 },
];

describe("Products", () => {
  it("renders the list of products", async () => {
    render(<Products products={products} />);
    const elements = await screen.findAllByTestId("product");
    expect(elements).toHaveLength(6);
  });

  it("calls the callback when the product is clicked", () => {
    const spy = jest.fn();
    render(<Products products={products} onAddToCart={spy} />);

    const element = screen.getAllByRole("button");
    fireEvent.click(element[0]);
    expect(spy).toHaveBeenCalledWith(products[0]);
  });
});
