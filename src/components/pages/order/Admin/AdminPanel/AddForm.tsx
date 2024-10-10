import { FormEvent, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useOrderContext } from "../../../../../context/useOrderContext";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import ProductForm from "./Form";

// Intermediate component to conditionnaly display the ProductForm component
export default function AddContent() {
  const { addItemToMenu, selectedItem, unSelectItem } = useOrderContext();
  const [successAddMessage, setSuccessAddMessage] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedItem) {
      addItemToMenu(selectedItem);
      setSuccessAddMessage(true);
      setTimeout(() => setSuccessAddMessage(false), 2000);
      unSelectItem();
    }
  };

  return (
    <ProductForm onSubmit={onSubmit}>
      <div className="action-add">
        <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
        {successAddMessage && (
          <div className="success-label">
            <FiCheck className="icon" /> Ajouté avec succès !
          </div>
        )}
      </div>
    </ProductForm>
  );
}
