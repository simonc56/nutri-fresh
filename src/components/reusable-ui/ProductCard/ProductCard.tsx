import { TiDelete } from "react-icons/ti";
import { formatPrice } from "../../../utils/maths";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ProductCard.scss";

type ProductCardProps = {
  imageSource: string;
  title: string;
  price: number;
  onDelete: () => void;
  canDelete: boolean;
};

export default function ProductCard({ imageSource, title, price, onDelete, canDelete }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imageSource ? imageSource : "/images/coming-soon.png"} alt={title} className="product-picture" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <div className="product-action">
          <span className="product-price">{formatPrice(price)}</span>
          <PrimaryButton label="Ajouter" />
        </div>
      </div>
      {canDelete && (
        <button className="delete-button" aria-label="bouton supprimer" onClick={onDelete} title="Supprimer">
          <TiDelete className="icon" />
        </button>
      )}
    </div>
  );
}
