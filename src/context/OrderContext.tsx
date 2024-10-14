import { createContext, Dispatch, SetStateAction, useState } from "react";
import { TabProps } from "../components/pages/order/Admin/AdminTabs/AdminTabs";
import { tabsConfig } from "../components/pages/order/Admin/tabsConfig";
import { MenuItem } from "../fakeData/fakeMenu";
import { useMenu } from "../hooks/useMenu";

type OrderContextType = {
  isAdminMode: boolean;
  setIsAdminMode: Dispatch<SetStateAction<boolean>>;
  isPanelOpen: boolean;
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>;
  tabs: TabProps[];
  setTabs: Dispatch<SetStateAction<TabProps[]>>;
  selectedTab: () => TabProps | undefined;
  selectTab: (index: string) => void;
  menu: MenuItem[];
  addItemToMenu: (item: Partial<MenuItem>) => void;
  removeItemFromMenu: (id: number) => void;
  resetMenu: () => void;
  selectedItem: MenuItem;
  setSelectedItemById: (id: number) => void;
  unSelectItem: () => void;
  updateItem: (item: MenuItem) => void;
  refInputName: React.RefObject<HTMLInputElement>;
};

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

// OrderContextProvider component to wrap the app with the context provider
export default function OrderContextProvider({ children }: { children: React.ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [tabs, setTabs] = useState<TabProps[]>(tabsConfig);
  const selectedTab = () => tabs.find((tab) => tab.active);
  const {
    menu,
    addItemToMenu,
    removeItemFromMenu,
    resetMenu,
    updateItem,
    selectedItem,
    setSelectedItemById,
    unSelectItem,
    refInputName,
  } = useMenu();

  const selectTab = (index: string) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.index === index,
      }))
    );
    setIsPanelOpen(true);
  };

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,
    isPanelOpen,
    setIsPanelOpen,
    tabs,
    setTabs,
    selectedTab,
    selectTab,
    menu,
    addItemToMenu,
    removeItemFromMenu,
    resetMenu,
    selectedItem,
    setSelectedItemById,
    unSelectItem,
    updateItem,
    refInputName,
  };

  return <OrderContext.Provider value={valueOrderContext}>{children}</OrderContext.Provider>;
}
