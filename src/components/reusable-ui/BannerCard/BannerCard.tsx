import { MdDeleteForever } from "react-icons/md";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import { formatPrice } from "src/utils/maths";
import "./BannerCard.scss";

type BannerCardProps = Omit<MenuItem, "isAvailable" | "isAdvertised">;

export default function BannerCard({ id, imageSource, title, price, quantity }: BannerCardProps) {
  const { removeItemFromBasket } = useOrderContext();

  return (
    <article className="banner-card">
      <div className="banner-card-picture">
        <img
          src={imageSource ? imageSource : "/images/coming-soon.png"}
          alt={imageSource ? title : "image non disponible"}
        />
      </div>
      <div className="banner-card-infos">
        <h3 className="banner-card-title">{title}</h3>
        <div className="banner-card-price">{formatPrice(price)}</div>
      </div>
      <div className="banner-card-qty">x {quantity}</div>
      <button
        className="banner-card-remove-btn"
        onClick={() => removeItemFromBasket(id)}
        aria-label="supprimer"
        title="Supprimer"
      >
        <MdDeleteForever size={26} />
      </button>
    </article>
  );
}
