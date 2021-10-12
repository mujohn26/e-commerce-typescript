import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("adds item to Basket when Add to cart is clicked", async () => {
    const products = [{ id: 1, name: "Keyboard", price: 9.99 }];
    render(<App products={products} />);
    const product = await screen.findByTestId("product-1");
    const button = await within(product).findByRole("button");

    fireEvent.click(button);

    const basket = await screen.findByTestId("basket");
    expect(await within(basket).findByText("Keyboard")).toBeDefined();
    expect(await within(basket).findByText("1")).toBeDefined();
  });
});
