import { useOrderContext } from "../../../../../context/useOrderContext";
import "./AdminContent.scss";

export default function AdminContent() {
  const { selectedTab } = useOrderContext();
  return <div className="admin-content">{selectedTab()?.content || "No tab selected"}</div>;
}
