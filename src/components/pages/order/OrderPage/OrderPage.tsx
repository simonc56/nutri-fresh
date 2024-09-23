import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../../../context/OrderContext";
import { fakeMenu, menuItem } from "../../../../fakeData/fakeMenu";
import { TabProps } from "../AdminPanel/AdminTabs/AdminTabs";
import { tabsConfig } from "../AdminPanel/tabsConfig";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./OrderPage.scss";

function OrderPage() {
  const { username } = useParams();
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
  };

  return (
    <OrderContext.Provider value={valueOrderContext}>
      <div className="order-page">
        <div className="container">
          <Navbar username={username || ""} />
          <Main />
        </div>
      </div>
    </OrderContext.Provider>
  );
}

export default OrderPage;
