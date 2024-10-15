import { TiDelete } from "react-icons/ti";
import { useOrderContext } from "src/context/useOrderContext";
import { formatPrice } from "src/utils/maths";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ProductCard.scss";

type ProductCardProps = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProductCard({ id, imageSource, title, price, onDelete }: ProductCardProps) {
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
    addItemToBasket(id);
  };

  return (
    <div
      className={`product-card${isAdminMode ? " admin-mode" : ""}${isSelected ? " selected" : ""}`}
      onClick={onClickCard}
    >
      <img src={imageSource ? imageSource : "/images/coming-soon.png"} alt={title} className="product-picture" />
      <div className={`product-info${isAdminMode && isSelected ? " revert-color" : ""}`}>
        <h3 className="product-title">{title}</h3>
        <div className="product-action">
          <span className="product-price">{formatPrice(price)}</span>
          <PrimaryButton
            label="ajouter"
            onClick={onClickButtonAdd}
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
