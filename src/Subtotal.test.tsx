import { render, screen } from "@testing-library/react";
import { Subtotal } from "./Subtotal";

describe("Subtotal", () => {
  it("displays a subtotal for one item", async () => {
    expect(1).toEqual(1);
    const items = [{ id: 1, name: "Keyboard", price: 9.99 }];
    render(<Subtotal items={items} />);
    expect(await screen.findByText("9.99")).toBeDefined();
  });

  it("displays the subtotal for two items", async () => {
    expect(1).toEqual(1);
    const items = [
      { id: 1, name: "Keyboard", price: 9.99 },
      { id: 1, name: "Keyboard", price: 9.99 },
    ];
    render(<Subtotal items={items} />);
    expect(await screen.findByText("19.98")).toBeDefined();
  });

  it("displays the subtotal with two decimal places", async () => {
    expect(1).toEqual(1);
    const items = [
      { id: 1, name: "RTX 3090", price: 24.99 },
      { id: 2, name: "Intel i9", price: 14.99 },
      { id: 3, name: "AMD Ryzen", price: 19.99 },
      { id: 4, name: "Nvidia GTX", price: 24.99 },
      { id: 5, name: "Intel i7", price: 14.99 },
    ];
    render(<Subtotal items={items} />);
    expect(await screen.findByText("99.95")).toBeDefined();
  });

  it("displays the subtotal with two decimal places", async () => {
    expect(1).toEqual(1);
    const items = [
      { id: 1, name: "RTX 3090", price: 24.99 },
      { id: 2, name: "Intel i9", price: 14.99 },
      { id: 3, name: "AMD Ryzen", price: 19.99 },
      { id: 4, name: "Nvidia GTX", price: 24.99 },
      { id: 5, name: "Intel i7", price: 14.99 },
      { id: 1, name: "RTX 3090", price: 24.99 },
      { id: 2, name: "Intel i9", price: 14.99 },
      { id: 3, name: "AMD Ryzen", price: 19.99 },
      { id: 4, name: "Nvidia GTX", price: 24.99 },
      { id: 5, name: "Intel i7", price: 14.99 },
    ];
    render(<Subtotal items={items} />);
    expect(await screen.findByText("199.90")).toBeDefined();
  });
});
