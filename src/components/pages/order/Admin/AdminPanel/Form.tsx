import { FormEvent, useEffect } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import TextInput from "src/components/reusable-ui/TextInput/TextInput";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import "./Form.scss";

type ProductFormProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
};

export default function Form({ onSubmit, children }: ProductFormProps) {
  const { selectedItem, updateItem, selectedTab, refInputName } = useOrderContext();

  useEffect(() => {
    if (selectedTab()?.index === "edit") refInputName.current?.focus();
  }, [selectedTab, refInputName]);

  const onChange = (key: keyof MenuItem, value: string | number | boolean) => {
    updateItem({ ...selectedItem, [key]: value });
  };

  if (!selectedItem) return null;

  return (
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
        {children}
      </div>
    </form>
  );
}
