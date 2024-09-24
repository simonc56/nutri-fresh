import { FormEvent, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { useOrderContext } from "../../../../../context/OrderContext";
import { menuItem } from "../../../../../fakeData/fakeMenu";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput/TextInput";
import "./AddForm.scss";

export default function AddForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const emptyItem = {
    title: "",
    imageSource: "",
    price: 0,
  };

  const [newItem, setNewItem] = useState<Partial<menuItem>>(emptyItem);
  const { addItemToMenu } = useOrderContext();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    addItemToMenu(newItem);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 2000);
    setNewItem(emptyItem);
  };

  const onChange = (key: string, value: string) => {
    setNewItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form className="add-product-form" onSubmit={onSubmit}>
      <div className="image-preview">
        {newItem.imageSource ? (
          <img
            className="image"
            src={newItem.imageSource}
            alt="product illustration"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          "Aucune image"
        )}
      </div>
      <div className="input-fields">
        <TextInput
          placeholder="Nom du produit (ex: Plat de lentilles)"
          value={newItem.title || ""}
          setValue={() => {}}
          Icon={<PiBowlFoodFill />}
          className="slim"
          onChange={(e) => onChange("title", e.target.value)}
          aria-label="Nom du produit"
        />
        <TextInput
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newItem.imageSource || ""}
          setValue={() => {}}
          Icon={<BsFillCameraFill />}
          className="slim"
          onChange={(e) => onChange("imageSource", e.target.value)}
        />
        <TextInput
          placeholder="Prix"
          value={(newItem.price && newItem.price.toString(10)) || ""}
          setValue={() => {}}
          Icon={<MdOutlineEuro />}
          className="slim"
          onChange={(e) => onChange("price", e.target.value)}
          type="number"
        />
        <div className="action-add">
          <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
          {successMessage && (
            <div className="success-label">
              <FiCheck className="icon" /> Ajouté avec succès !
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
