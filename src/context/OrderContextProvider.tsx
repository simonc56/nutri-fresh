import { useState } from "react";
import { OrderContext } from "src/context/useOrderContext";
import useBasket from "src/hooks/useBasket";
import { TabProps } from "../components/pages/order/Admin/AdminTabs/AdminTabs";
import { tabsConfig } from "../components/pages/order/Admin/tabsConfig";
import { useMenu } from "../hooks/useMenu";

// OrderContextProvider component to wrap the app with the context provider
export default function OrderContextProvider({ username, children }: { username: string; children: React.ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [tabs, setTabs] = useState<TabProps[]>(tabsConfig);
  const selectedTab = () => tabs.find((tab) => tab.active);

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
    username,
    ...useMenu(),
    ...useBasket(username),
    isAdminMode,
    setIsAdminMode,
    isPanelOpen,
    setIsPanelOpen,
    tabs,
    setTabs,
    selectedTab,
    selectTab,
  };

  return <OrderContext.Provider value={valueOrderContext}>{children}</OrderContext.Provider>;
}
