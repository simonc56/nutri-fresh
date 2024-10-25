import { Dispatch, SetStateAction } from "react";
import { loadBasketFromLocalStorage } from "src/api/basket";
import { BasketItem } from "src/hooks/useBasket";

export const initUserSession = async (
  username: string,
  resetMenu: () => void,
  setBasket: Dispatch<SetStateAction<BasketItem[]>>
) => {
  if (username) {
    resetMenu();
    const basket = loadBasketFromLocalStorage(username);
    if (basket) setBasket(basket);
  }
};
