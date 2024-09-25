import { createContext, Dispatch, SetStateAction, useState } from "react";
import { TabProps } from "../components/pages/order/AdminPanel/AdminTabs/AdminTabs";
import { tabsConfig } from "../components/pages/order/AdminPanel/tabsConfig";
import { fakeMenu, menuItem } from "../fakeData/fakeMenu";

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

// OrderContextProvider component to wrap the app with the context provider
export default function OrderContextProvider({ children }: { children: React.ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [tabs, setTabs] = useState<TabProps[]>(tabsConfig);
  const selectedTab = () => tabs.find((tab) => tab.active);
  const [menu, setMenu] = useState<menuItem[]>(fakeMenu.MEDIUM);

  const addItemToMenu = (item: Partial<menuItem>) => {
    const maxId = Math.max(...menu.map((item) => item.id));
    const newItem = {
      ...item,
      id: maxId + 1,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    } as menuItem;
    setMenu((prev) => [newItem, ...prev]);
  };

  const removeItemFromMenu = (id: number) => {
    setMenu((previousMenu) => previousMenu.filter((item) => item.id !== id));
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,
    isPanelOpen,
    setIsPanelOpen,
    tabs,
    setTabs,
    selectedTab,
    menu,
    addItemToMenu,
    removeItemFromMenu,
    resetMenu,
  };

  return <OrderContext.Provider value={valueOrderContext}>{children}</OrderContext.Provider>;
}