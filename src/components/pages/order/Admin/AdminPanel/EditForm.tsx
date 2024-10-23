import { FocusEvent, useState } from "react";
import { BsCloudCheck } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";
import { useOrderContext } from "src/context/useOrderContext";
import { useTimedMessage } from "src/hooks/useTimedMessage";
import "./EditForm.scss";
import Form from "./Form";

function NoItemSelectedToEdit() {
  return (
    <div className="no-item-selected">
      Cliquer sur un produit pour le modifier <HiCursorClick className="icon" />
    </div>
  );
}

// Intermediate component to conditionnaly display the Form component
export default function EditContent() {
  const { isDisplayed, displayMessage } = useTimedMessage(2000);
  const { selectedItem } = useOrderContext();
  const [editedValue, setEditedValue] = useState("");

  const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
    setEditedValue(event.target.value);
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (editedValue !== event.target.value) {
      displayMessage();
    }
  };

  return selectedItem.id !== 0 ? (
    <Form onFocus={handleOnFocus} onBlur={handleOnBlur}>
      {isDisplayed ? (
        <div className="saved-label">
          <BsCloudCheck className="icon" /> Modifications enregistrées !
        </div>
      ) : (
        <div className="info-edit">
          Cliquer sur un produit du menu pour le modifier <em>en temps réel</em>
        </div>
      )}
    </Form>
  ) : (
    <NoItemSelectedToEdit />
  );
}
