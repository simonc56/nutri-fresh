import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { TabProps } from "src/components/pages/order/Admin/AdminTabs/AdminTabs";
import { MenuItem } from "src/startData/startMenu";
import { BasketItem } from "../hooks/useBasket";

type OrderContextType = {
  username: string;
  isAdminMode: boolean;
  setIsAdminMode: Dispatch<SetStateAction<boolean>>;
  isPanelOpen: boolean;
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>;
  tabs: TabProps[];
  setTabs: Dispatch<SetStateAction<TabProps[]>>;
  selectedTab: () => TabProps | undefined;
  selectTab: (index: string) => void;
  menu: MenuItem[];
  isLoading: boolean;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  addItemToMenu: (item: Partial<MenuItem>) => void;
  removeItemFromMenu: (id: number) => void;
  loadMenu: () => Promise<boolean>;
  resetMenu: () => void;
  selectedItem: MenuItem;
  setSelectedItemById: (id: number) => void;
  unSelectItem: () => void;
  updateItem: (item: MenuItem) => void;
  basket: BasketItem[];
  setBasket: Dispatch<SetStateAction<BasketItem[]>>;
  addItemToBasket: (id: number) => void;
  removeItemFromBasket: (id: number) => void;
  refInputName: React.RefObject<HTMLInputElement>;
  isDisplayed: boolean;
  displayMessage: () => void;
};

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

// custom hook to use the order context in any component with only one import
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderContextProvider");
  }
  return context;
};
