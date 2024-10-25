import { BasketItem } from "src/hooks/useBasket";

export const saveBasketToLocalStorage = (username: string, basket: BasketItem[]) => {
  localStorage.setItem(`basket_${username}`, JSON.stringify(basket));
};

export const loadBasketFromLocalStorage = (username: string): BasketItem[] => {
  const basket = localStorage.getItem(`basket_${username}`);
  return basket ? JSON.parse(basket) : [];
};

export const removeBasketInLocalStorage = (username: string) => {
  localStorage.removeItem(`basket_${username}`);
};
