import { useState } from "react";

export type BasketItem = { id: number; quantity: number };

export default function useBasket() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addItemToBasket = (id: number) => {
    if (basket.some((item) => item.id === id)) {
      setBasket((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setBasket((prev) => [...prev, { id, quantity: 1 }]);
    }
  };

  const removeItemFromBasket = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  return { basket, addItemToBasket, removeItemFromBasket };
}
