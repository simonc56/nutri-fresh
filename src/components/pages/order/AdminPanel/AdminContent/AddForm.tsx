import { FormEvent } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput/TextInput";
import "./AddForm.scss";

const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  event?.preventDefault();
  console.log("Product added!");
};

export default function AddForm() {
  return (
    <form className="add-product-form" onSubmit={onSubmit}>
      <img className="image-preview" src="/images/ananas.png" alt="product illustration" />
      <div className="input-fields">
        <TextInput
          placeholder="Plat de lentilles"
          value={""}
          setValue={() => {}}
          Icon={<PiBowlFoodFill />}
          className="product-name"
        />
        <TextInput
          placeholder="https://domain.com/path/to/picture.jpg"
          value={""}
          setValue={() => {}}
          Icon={<BsFillCameraFill />}
          className="product-url"
        />
        <TextInput
          placeholder="12.5"
          value={""}
          setValue={() => {}}
          Icon={<MdOutlineEuro />}
          className="product-price"
        />
        <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
      </div>
    </form>
  );
}
