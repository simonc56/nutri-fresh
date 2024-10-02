import { FormEvent, useEffect, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { useOrderContext } from "../../../../../context/useOrderContext";
import { MenuItem } from "../../../../../fakeData/fakeMenu";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput/TextInput";
import "./ProductForm.scss";

type ProductFormProps = {
  type: "add" | "edit";
};

export default function ProductForm({ type }: ProductFormProps) {
  const { addItemToMenu, selectedItem, updateItem, unSelectItem, refInputName } = useOrderContext();
  const [successAddMessage, setSuccessAddMessage] = useState(false);

  useEffect(() => {
    if (refInputName.current) {
      refInputName.current.focus();
    }
  }, [refInputName]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    selectedItem && addItemToMenu(selectedItem);
    setSuccessAddMessage(true);
    setTimeout(() => {
      setSuccessAddMessage(false);
    }, 2000);
    unSelectItem();
  };

  const onChange = (key: keyof MenuItem, value: string | number | boolean) => {
    updateItem({ ...selectedItem, [key]: value });
  };

  return (
    selectedItem && (
      <form className="product-form" onSubmit={onSubmit}>
        <div className="image-preview">
          {selectedItem.imageSource ? (
            <img
              className="image"
              src={selectedItem.imageSource}
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
            value={selectedItem.title || ""}
            setValue={() => {}}
            Icon={<PiBowlFoodFill />}
            className="slim"
            onChange={(e) => onChange("title", e.target.value)}
            aria-label="Nom du produit"
            ref={refInputName}
          />
          <TextInput
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            value={selectedItem.imageSource || ""}
            setValue={() => {}}
            Icon={<BsFillCameraFill />}
            className="slim"
            onChange={(e) => onChange("imageSource", e.target.value)}
          />
          <TextInput
            placeholder="Prix"
            value={(selectedItem.price && selectedItem.price.toString(10)) || ""}
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
