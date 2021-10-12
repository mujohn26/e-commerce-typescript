import React from "react";

type ItemDataType = {
  id: number;
  name: string;
  price: number;
};

type BasketItemDataType = {
  count: number;
  id: number;
  name: string;
  price: number;
};

type BasketType = BasketItemDataType[];

type BasketProps = {
  items: ItemDataType[];
};

export const Basket: React.FC<BasketProps> = ({ items }) => {
  const basketItems = items.reduce((basket, item) => {
    const duplicateBasketItemIndex = basket.findIndex(
      (basketItem) => basketItem.id === item.id
    );

    if (duplicateBasketItemIndex > -1) {
      const basketItem = basket[duplicateBasketItemIndex];
      basketItem.count++;
    } else {
      basket.push({ ...item, count: 1 });
    }
    return basket;
  }, [] as BasketType);

  return (
    <div data-testid="basket">
      {basketItems.map((item) => {
        return (
          <div className="basket-item" key={item.id}>
            <span className="name">{item.name}</span>
            <span className="count">{item.count}</span>
          </div>
        );
      })}
    </div>
  );
};
