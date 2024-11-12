import { FormEvent, useEffect, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { MdOutlineEuro } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import BooleanInput from "src/components/reusable-ui/BooleanInput/BooleanInput";
import TextInput from "src/components/reusable-ui/TextInput/TextInput";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/startData/startMenu";
import "./Form.scss";

type ProductFormProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
};

export default function Form({ onSubmit, children }: ProductFormProps) {
  const { selectedItem, updateItem, selectedTab, refInputName } = useOrderContext();
  const [firstRender, setFirstRender] = useState(true);
  const [myTimeout, setMyTimeout] = useState<number | undefined>(undefined);
  const [inputImageSource, setInputImageSource] = useState<string>(selectedItem.imageSource);

  useEffect(() => {
    if (firstRender && selectedTab()?.index === "edit") {
      setFirstRender(false);
      refInputName.current?.focus();
    }
  }, [selectedTab]);

  useEffect(() => {
    setInputImageSource(selectedItem.imageSource);
  }, [selectedItem]);

  const onChange = <K extends keyof MenuItem>(key: K, value: MenuItem[K]) => {
    // debounce image url update while typing
    if (key === "imageSource") {
      setInputImageSource(value as string);
      if (myTimeout) clearTimeout(myTimeout);
      const timeoutID = window.setTimeout(() => {
        updateItem({ ...selectedItem, [key]: value });
      }, 500);
      setMyTimeout(timeoutID);
    } else {
      updateItem({ ...selectedItem, [key]: value });
    }
  };

  if (!selectedItem) return null;

  return (
    <form className="product-form" onSubmit={onSubmit}>
      {selectedItem.imageSource ? (
        <div className="image-preview">
          <img className="image" src={selectedItem.imageSource} alt="product illustration" />
        </div>
      ) : (
        <div className="image-no-preview">Aucune image</div>
      )}

      <div className="input-fields">
        <TextInput
          placeholder="Nom du produit (ex: Plat de lentilles)"
          value={selectedItem.title || ""}
          Icon={<PiBowlFoodFill />}
          className="slim"
          onChange={(e) => onChange("title", e.target.value)}
          aria-label="Nom du produit"
          ref={refInputName}
        />
        <TextInput
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={inputImageSource}
          Icon={<BsFillCameraFill />}
          className="slim"
          onChange={(e) => onChange("imageSource", e.target.value)}
        />
        <div className="small-inputs">
          <TextInput
            placeholder="Prix"
            value={(selectedItem.price && selectedItem.price.toString(10)) || ""}
            Icon={<MdOutlineEuro />}
            className="slim"
            onChange={(e) => onChange("price", parseFloat(e.target.value))}
            type="number"
          />
          <BooleanInput
            labels={["En stock", "En rupture"]}
            checked={selectedItem.isAvailable}
            id="isAvailable"
            Icon={<FiPackage />}
            onChange={(e) => onChange("isAvailable", e.target.checked)}
          />
          <BooleanInput
            labels={["Avec pub", "Sans pub"]}
            checked={selectedItem.isAdvertised}
            id="isAdvertised"
            Icon={<GoMegaphone />}
            className="slim"
            onChange={(e) => onChange("isAdvertised", e.target.checked)}
          />
        </div>
        {children}
      </div>
    </form>
  );
}
