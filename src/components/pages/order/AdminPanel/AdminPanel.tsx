import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminContent from "./AdminContent/AdminContent";
import "./AdminPanel.scss";
import AdminTabs, { TabProps } from "./AdminTabs/AdminTabs";

export default function AdminPanel() {
  const [tabs, setTabs] = useState<TabProps[]>([
    { icon: <AiOutlinePlus />, name: "Ajouter un produit", active: true },
    { icon: <MdModeEditOutline />, name: "Modifier un produit" },
  ]);
  const [contentPanel, setContentPanel] = useState("Ajouter un produit");

  return (
    <div className="admin-panel">
      <AdminTabs tabs={tabs} setTabs={setTabs} />
      <AdminContent content={contentPanel} />
    </div>
  );
}
