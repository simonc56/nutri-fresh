import { TiDelete } from "react-icons/ti";
import { useOrderContext } from "../../../context/useOrderContext";
import { formatPrice } from "../../../utils/maths";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ProductCard.scss";

type ProductCardProps = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  canDelete: boolean;
};

export default function ProductCard({ id, imageSource, title, price, onDelete, canDelete }: ProductCardProps) {
  const { isAdminMode, setIsPanelOpen, selectTab, selectedItem, setSelectedItemById, unSelectItem } = useOrderContext();
  const isSelected = selectedItem?.id === id;
  const onClickCard = () => {
    if (isSelected) {
      unSelectItem();
    } else {
      setSelectedItemById(id);
      selectTab("edit");
      setIsPanelOpen(true);
    }
  };

  return (
    <div
      className={`product-card${isAdminMode ? " admin-mode" : ""}${isSelected ? " selected" : ""}`}
      onClick={onClickCard}
    >
      <img src={imageSource ? imageSource : "/images/coming-soon.png"} alt={title} className="product-picture" />
      <div className={`product-info${isAdminMode && isSelected ? " product-info__revert-color" : ""}`}>
        <h2 className="product-title">{title}</h2>
        <div className="product-action">
          <span className="product-price">{formatPrice(price)}</span>
          <PrimaryButton label="Ajouter" className={isAdminMode && isSelected ? "primary-button__revert-color" : ""} />
        </div>
      </div>
      {canDelete && !isSelected && (
        <button className="delete-button" aria-label="bouton supprimer" onClick={onDelete} title="Supprimer">
          <TiDelete className="icon" />
        </button>
      )}
    </div>
  );
}
