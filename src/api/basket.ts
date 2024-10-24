import { BasketItem } from "src/hooks/useBasket";

export const saveBasket = (username: string, basket: BasketItem[]) => {
  localStorage.setItem(`basket_${username}`, JSON.stringify(basket));
};

export const loadBasket = (username: string): BasketItem[] => {
  const basket = localStorage.getItem(`basket_${username}`);
  return basket ? JSON.parse(basket) : [];
};

export const resetBasket = (username: string) => {
  localStorage.removeItem(`basket_${username}`);
};
