import { useOrderContext } from "../../../../../context/useOrderContext";
import AddForm from "./AddForm";
import "./AdminContent.scss";

export default function AdminContent() {
  const { selectedTab } = useOrderContext();
  return <div className="admin-content">{selectedTab()?.content || <AddForm />}</div>;
}
