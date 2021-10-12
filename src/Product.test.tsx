import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Product } from "./Product";

describe("Product", () => {
  it("renders a product", () => {
    render(<Product product={{ id: 1, name: "RTX 3090", price: 14.99 }} />);
    const element = screen.getByTestId("product-1");
    expect(element).toHaveTextContent("RTX 3090");
    expect(element).toHaveTextContent("14.99");
  });

  it("renders another product", () => {
    render(<Product product={{ id: 2, name: "RTX 3090", price: 24.99 }} />);
    const element = screen.getByTestId("product-2");
    expect(element).toHaveTextContent("24.99");
  });

  it("calls the callback when the product is clicked", () => {
    const spy = jest.fn();
    render(
      <Product
        product={{ id: 2, name: "Intel i9", price: 199.99 }}
        onClick={spy}
      />
    );
    const element = screen.getByRole("button");
    fireEvent.click(element);
    expect(spy).toHaveBeenCalled();
  });
});
