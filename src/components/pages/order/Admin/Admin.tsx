import { useOrderContext } from "../../../../context/useOrderContext";
import "./Admin.scss";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminTabs from "./AdminTabs/AdminTabs";

export default function Admin() {
  const { isPanelOpen } = useOrderContext();

  return (
    <div className="admin">
      <AdminTabs />
      {isPanelOpen && <AdminPanel />}
    </div>
  );
}
