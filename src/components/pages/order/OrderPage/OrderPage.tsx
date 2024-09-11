import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../../../context/OrderContext";
import { TabProps } from "../AdminPanel/AdminTabs/AdminTabs";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./OrderPage.scss";

function OrderPage() {
  const { username } = useParams();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [tabs, setTabs] = useState<TabProps[]>([
    { icon: <AiOutlinePlus />, name: "Ajouter un produit", active: true },
    { icon: <MdModeEditOutline />, name: "Modifier un produit" },
  ]);
  const [contentPanel, setContentPanel] = useState("Ajouter un produit");

  const valueOrderContext = {
    isAdminMode,
    setIsAdminMode,
    isPanelOpen,
    setIsPanelOpen,
    tabs,
    setTabs,
    contentPanel,
    setContentPanel,
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
