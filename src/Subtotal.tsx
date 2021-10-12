import React, { FC } from "react";

type ItemDataType = {
  id: number;
  name: string;
  price: number;
};

type SubItemDataType = {
  count: number;
  id: number;
  name: string;
  price: number;
};

type SubtotalType = {
  items: ItemDataType[];
};

export const Subtotal: FC<SubtotalType> = ({ items }) => {
  const subtotal = items.reduce((total, item) => {
    const sum = total + item.price;
    return parseFloat(sum.toFixed(2));
  }, 0);
  return <div>{subtotal}</div>;
};
