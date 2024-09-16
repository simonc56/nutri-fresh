import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../../../context/OrderContext";
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

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,
    isPanelOpen,
    setIsPanelOpen,
    tabs,
    setTabs,
    selectedTab,
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
