import { TiDelete } from "react-icons/ti";
import { useOrderContext } from "src/context/useOrderContext";
import { formatPrice } from "src/utils/maths";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Ribbon from "../Ribbon/Ribbon";
import UnavailableTag from "../UnavailableTag/UnavailableTag";
import "./ProductCard.scss";

type ProductCardProps = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  isAvailable: boolean;
  isAdvertised: boolean;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProductCard({
  id,
  imageSource,
  title,
  price,
  isAvailable,
  isAdvertised,
  onDelete,
}: ProductCardProps) {
  const { isAdminMode, setIsPanelOpen, selectTab, selectedItem, setSelectedItemById, unSelectItem, addItemToBasket } =
    useOrderContext();
  const isSelected = selectedItem?.id === id;

  const onClickCard = () => {
    if (!isAdminMode) return;
    if (isSelected) {
      unSelectItem();
    } else {
      setSelectedItemById(id);
      selectTab("edit");
      setIsPanelOpen(true);
    }
  };

  const onClickButtonAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isAvailable) addItemToBasket(id);
  };

  return (
    <div
      className={`product-card${isAdminMode ? " admin-mode" : ""}${isSelected ? " selected" : ""}`}
      onClick={onClickCard}
    >
      {isAdvertised && <Ribbon label="nouveau" />}
      {!isAvailable && <UnavailableTag />}
      <img src={imageSource ? imageSource : "/images/bientot-disponible.png"} alt={title} className="product-picture" />
      <div className={`product-info${isAdminMode && isSelected ? " revert-color" : ""}`}>
        <h3 className="product-title">{title}</h3>
        <div className="product-action">
          <span className="product-price">{formatPrice(price)}</span>
          <PrimaryButton
            label="ajouter"
            onClick={onClickButtonAdd}
            clickAllowed={isAvailable}
            className={isAdminMode && isSelected ? "primary-button__revert-color" : ""}
          />
        </div>
      </div>
      {isAdminMode && !isSelected && (
        <button className="delete-button" aria-label="supprimer" onClick={onDelete} title="Supprimer">
          <TiDelete className="icon" />
        </button>
      )}
    </div>
  );
}
