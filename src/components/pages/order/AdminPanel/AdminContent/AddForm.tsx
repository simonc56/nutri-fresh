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
    console.log("Product added!");
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
      <img
        className="image-preview"
        src={newItem.imageSource ? newItem.imageSource : "/images/ananas.png"}
        alt="product illustration"
      />
      <div className="input-fields">
        <TextInput
          placeholder="Nom du produit (ex: Plat de lentilles)"
          value={newItem.title || ""}
          setValue={() => {}}
          Icon={<PiBowlFoodFill />}
          className="item-title"
          onChange={(e) => onChange("title", e.target.value)}
          aria-label="Nom du produit"
        />
        <TextInput
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newItem.imageSource || ""}
          setValue={() => {}}
          Icon={<BsFillCameraFill />}
          className="item-image-source"
          onChange={(e) => onChange("imageSource", e.target.value)}
        />
        <TextInput
          placeholder="Prix"
          value={(newItem.price && newItem.price != 0 && newItem.price.toString(10)) || ""}
          setValue={() => {}}
          Icon={<MdOutlineEuro />}
          className="item-price"
          onChange={(e) => onChange("price", e.target.value)}
          type="number"
        />
        <div className="action-add">
          <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
          {successMessage && (
            <div className="success-label">
              <FiCheck /> Ajouté avec succès !
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
