import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { useOrderContext } from "../../../../../context/useOrderContext";
import { menuItem } from "../../../../../fakeData/fakeMenu";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput/TextInput";
import "./ProductForm.scss";

type ProductFormProps = {
  type: "add" | "edit";
  menuItem: menuItem;
  setMenuItem: Dispatch<SetStateAction<menuItem>>;
  resetForm: () => void;
};

export default function ProductForm({ type, menuItem, setMenuItem, resetForm }: ProductFormProps) {
  const { addItemToMenu } = useOrderContext();
  const [successAddMessage, setSuccessAddMessage] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    menuItem && addItemToMenu(menuItem);
    setSuccessAddMessage(true);
    setTimeout(() => {
      setSuccessAddMessage(false);
    }, 2000);
    resetForm();
  };

  const onChange = (key: keyof menuItem, value: string | number | boolean) => {
    setMenuItem((prev) => ({ ...prev, [key]: value }));
  };

  return (
    menuItem && (
      <form className="product-form" onSubmit={onSubmit}>
        <div className="image-preview">
          {menuItem.imageSource ? (
            <img
              className="image"
              src={menuItem.imageSource}
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
            value={menuItem.title || ""}
            setValue={() => {}}
            Icon={<PiBowlFoodFill />}
            className="slim"
            onChange={(e) => onChange("title", e.target.value)}
            aria-label="Nom du produit"
          />
          <TextInput
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            value={menuItem.imageSource || ""}
            setValue={() => {}}
            Icon={<BsFillCameraFill />}
            className="slim"
            onChange={(e) => onChange("imageSource", e.target.value)}
          />
          <TextInput
            placeholder="Prix"
            value={(menuItem.price && menuItem.price.toString(10)) || ""}
            setValue={() => {}}
            Icon={<MdOutlineEuro />}
            className="slim"
            onChange={(e) => onChange("price", e.target.value)}
            type="number"
          />
          {type === "add" ? (
            <div className="action-add">
              <PrimaryButton className="submit-button" label="Ajouter un nouveau produit au menu" />
              {successAddMessage && (
                <div className="success-label">
                  <FiCheck className="icon" /> Ajouté avec succès !
                </div>
              )}
            </div>
          ) : (
            <div className="info-edit">
              Cliquer sur un produit du menu pour le modifier <em>en temps réel</em>
            </div>
          )}
        </div>
      </form>
    )
  );
}
