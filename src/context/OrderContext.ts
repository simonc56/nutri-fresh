import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { TabProps } from "../components/pages/order/AdminPanel/AdminTabs/AdminTabs";
import { menuItem } from "../fakeData/fakeMenu";

type OrderContextType = {
  isAdminMode: boolean;
  setIsAdminMode: Dispatch<SetStateAction<boolean>>;
  isPanelOpen: boolean;
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>;
  tabs: TabProps[];
  setTabs: Dispatch<SetStateAction<TabProps[]>>;
  selectedTab: () => TabProps | undefined;
  menu: menuItem[];
  addItemToMenu: (item: Partial<menuItem>) => void;
  removeItemFromMenu: (id: number) => void;
  resetMenu: () => void;
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
