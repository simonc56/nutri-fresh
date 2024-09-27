import { useOrderContext } from "../../../../../context/useOrderContext";
import "./AdminPanel.scss";

export default function AdminContent() {
  const { selectedTab } = useOrderContext();
  return <div className="admin-panel">{selectedTab()?.content || "No tab selected"}</div>;
}
