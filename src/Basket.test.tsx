import { render, screen } from "@testing-library/react";
import { Basket } from "./Basket";

describe("Basket", () => {
  it("displays items", async () => {
    const items = [{ id: 1, name: "Keyboard", price: 9.99 }];
    render(<Basket items={items} />);
    expect(await screen.findByText("Keyboard")).toBeDefined();
  });

  it("displays a count for repeated items", async () => {
    const items = [
      { id: 1, name: "Mouse", price: 9.99 },
      { id: 1, name: "Mouse", price: 9.99 },
    ];
    render(<Basket items={items} />);
    expect(await screen.findByText("Mouse")).toBeDefined();
    expect(await screen.findByText("2")).toBeDefined();
  });
});
