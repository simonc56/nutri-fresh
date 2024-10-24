import { useState } from "react";
import { saveBasket } from "src/api/basket";

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
      saveBasket(username, updatedBasket); // save to local storage
      return updatedBasket;
    });
  };

  const removeItemFromBasket = (id: number) => {
    setBasket((prev) => {
      const updatedBasket = prev.filter((item) => item.id !== id);
      saveBasket(username, updatedBasket); // save to local storage
      return updatedBasket;
    });
  };

  return { basket, setBasket, addItemToBasket, removeItemFromBasket };
}
