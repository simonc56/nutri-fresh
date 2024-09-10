import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminContent from "./AdminContent/AdminContent";
import "./AdminPanel.scss";
import AdminTabs, { TabProps } from "./AdminTabs/AdminTabs";

export default function AdminPanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [tabs, setTabs] = useState<TabProps[]>([
    { icon: <AiOutlinePlus />, name: "Ajouter un produit", active: true },
    { icon: <MdModeEditOutline />, name: "Modifier un produit" },
  ]);
  const [contentPanel, setContentPanel] = useState("Ajouter un produit");

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  return (
    <div className={`admin-panel${isPanelOpen ? " open" : ""}`}>
      <AdminTabs tabs={tabs} setTabs={setTabs} isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      <AdminContent content={contentPanel} />
    </div>
  );
}
