import { useOrderContext } from "../../../../context/useOrderContext";
import AdminContent from "./AdminContent/AdminContent";
import "./AdminPanel.scss";
import AdminTabs from "./AdminTabs/AdminTabs";

export default function AdminPanel() {
  const { isPanelOpen } = useOrderContext();

  return (
    <div className="admin-panel">
      <AdminTabs />
      {isPanelOpen && <AdminContent />}
    </div>
  );
}
