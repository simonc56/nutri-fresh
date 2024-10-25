import { useState } from "react";
import { saveBasketToLocalStorage } from "src/api/basket";

export type BasketItem = { id: number; quantity: number };

export default function useBasket(username: string) {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addItemToBasket = (id: number) => {
    setBasket((previousBasket) => {
      let updatedBasket;
      if (previousBasket.some((item) => item.id === id)) {
        // item already in basket, increment quantity
        updatedBasket = previousBasket.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // item not in basket, add it
        updatedBasket = [...previousBasket, { id, quantity: 1 }];
      }
      saveBasketToLocalStorage(username, updatedBasket);
      return updatedBasket;
    });
  };

  const removeItemFromBasket = (id: number) => {
    setBasket((prev) => {
      const updatedBasket = prev.filter((item) => item.id !== id);
      saveBasketToLocalStorage(username, updatedBasket);
      return updatedBasket;
    });
  };

  return { basket, setBasket, addItemToBasket, removeItemFromBasket };
}
