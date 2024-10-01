import { useOrderContext } from "../../../../../context/useOrderContext";
import "./EditContent.scss";
import ProductForm from "./ProductForm";

// Intermediate component to conditionnaly display the ProductForm component
export default function AddContent() {
  const { selectedItem, setSelectedItem, unSelectItem } = useOrderContext();

  return (
    <ProductForm type="add" menuItem={selectedItem} setMenuItem={setSelectedItem} resetForm={() => unSelectItem()} />
  );
}
