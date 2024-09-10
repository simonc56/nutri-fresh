import { useOrderContext } from "../../../../../context/OrderContext";
import "./AdminContent.scss";

export default function AdminContent() {
  const { contentPanel } = useOrderContext();
  return <div className="admin-content">{contentPanel}</div>;
}
