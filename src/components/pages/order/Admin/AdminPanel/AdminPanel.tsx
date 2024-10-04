import { useOrderContext } from "../../../../../context/useOrderContext";
import "./AdminPanel.scss";

export default function AdminPanel() {
  const { selectedTab } = useOrderContext();
  return <div className="admin-panel">{selectedTab()?.content || "No tab selected"}</div>;
}
