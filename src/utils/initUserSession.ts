import { Dispatch, SetStateAction } from "react";
import { loadBasketFromLocalStorage } from "src/api/basket";
import { dbAuthenticateUser } from "src/api/user";
import { BasketItem } from "src/hooks/useBasket";
import { notify } from "./notification";

export const initUserSession = async (
  username: string,
  resetMenu: () => void,
  loadMenu: () => Promise<boolean>,
  setBasket: Dispatch<SetStateAction<BasketItem[]>>,
  setIsError: Dispatch<SetStateAction<boolean>>
) => {
  if (username) {
    try {
      const isNewUser = await dbAuthenticateUser(username);
      if (isNewUser) {
        resetMenu();
      } else {
        const isSuccess = await loadMenu();
        if (!isSuccess) {
          notify("Erreur lors du chargement du menu");
        }
        const basket = loadBasketFromLocalStorage(username);
        if (basket) setBasket(basket);
      }
    } catch {
      setIsError(true);
    }
  }
};
