import { FormEvent, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { useOrderContext } from "../../../../../context/OrderContext";
import { menuItem } from "../../../../../fakeData/fakeMenu";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput/TextInput";
import "./AddForm.scss";

export default function AddForm() {
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
  };

  const onChange = (key: string, value: string) => {
    setNewItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form className="add-product-form" onSubmit={onSubmit}>
      <img className="image-preview" src="/images/ananas.png" alt="product illustration" />
      <div className="input-fields">
        <TextInput
          placeholder="Plat de lentilles"
          value={newItem.title || ""}
          setValue={() => {}}
          Icon={<PiBowlFoodFill />}
          className="item-title"
          onChange={(e) => onChange("title", e.target.value)}
        />
        <TextInput
          placeholder="https://domain.com/path/to/picture.jpg"
          value={newItem.imageSource || ""}
          setValue={() => {}}
          Icon={<BsFillCameraFill />}
          className="item-image-source"
          onChange={(e) => onChange("imageSource", e.target.value)}
        />
        <TextInput
          placeholder="12.5"
          value={(newItem.price && newItem.price != 0 && newItem.price.toString(10)) || ""}
          setValue={() => {}}
          Icon={<MdOutlineEuro />}
          className="item-price"
          onChange={(e) => onChange("price", e.target.value)}
          type="number"
        />
        <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
      </div>
    </form>
  );
}
