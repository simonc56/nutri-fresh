import { useOrderContext } from "../../../../context/OrderContext";
import AdminContent from "./AdminContent/AdminContent";
import "./AdminPanel.scss";
import AdminTabs from "./AdminTabs/AdminTabs";

export default function AdminPanel() {
  const { isPanelOpen } = useOrderContext();

  return (
    <div className={`admin-panel${isPanelOpen ? " open" : ""}`}>
      <AdminTabs />
      <AdminContent />
    </div>
  );
}
