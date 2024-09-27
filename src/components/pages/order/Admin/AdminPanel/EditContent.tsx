import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/useOrderContext";
import "./EditContent.scss";
import ProductForm from "./ProductForm";

function NoItemSelectedToEdit() {
  return (
    <div className="no-item-selected">
      Cliquer sur un produit pour le modifier <HiCursorClick className="icon" />
    </div>
  );
}

// Intermediate component to conditionnaly display the ProductForm component
export default function EditContent() {
  const { selectedItemIndex } = useOrderContext();
  const isItemSelected = selectedItemIndex !== 0;
  return isItemSelected ? <ProductForm type="edit" /> : <NoItemSelectedToEdit />;
}
