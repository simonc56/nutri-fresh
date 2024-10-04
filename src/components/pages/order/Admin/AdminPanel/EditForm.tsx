import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "../../../../../context/useOrderContext";
import "./EditForm.scss";
import ProductForm from "./Form";

function NoItemSelectedToEdit() {
  return (
    <div className="no-item-selected">
      Cliquer sur un produit pour le modifier <HiCursorClick className="icon" />
    </div>
  );
}

// Intermediate component to conditionnaly display the ProductForm component
export default function EditContent() {
  const { selectedItem } = useOrderContext();
  return selectedItem.id !== 0 ? (
    <ProductForm>
      <div className="info-edit">
        Cliquer sur un produit du menu pour le modifier <em>en temps réel</em>
      </div>
    </ProductForm>
  ) : (
    <NoItemSelectedToEdit />
  );
}
