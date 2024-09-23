import { formatPrice } from "../../../utils/maths";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./ProductCard.scss";

type ProductCardProps = {
  imageSource: string;
  title: string;
  price: number;
};

export default function ProductCard({ imageSource, title, price }: ProductCardProps) {
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
    </div>
  );
}
