import { FormEvent } from "react";
import { FiCheck } from "react-icons/fi";
import PrimaryButton from "src/components/reusable-ui/PrimaryButton/PrimaryButton";
import { useOrderContext } from "src/context/useOrderContext";
import { useTimedMessage } from "src/hooks/useTimedMessage";
import ProductForm from "./Form";

// Intermediate component to conditionnaly display the ProductForm component
export default function AddContent() {
  const { addItemToMenu, selectedItem, unSelectItem } = useOrderContext();
  const { isDisplayed, displayMessage } = useTimedMessage(2000);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedItem) {
      addItemToMenu(selectedItem);
      displayMessage();
      unSelectItem();
    }
  };

  return (
    <ProductForm onSubmit={onSubmit}>
      <div className="action-add">
        <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
        {isDisplayed && (
          <div className="success-label">
            <FiCheck className="icon" /> Ajouté avec succès !
          </div>
        )}
      </div>
    </ProductForm>
  );
}
