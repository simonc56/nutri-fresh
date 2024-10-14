import { MdDeleteForever } from "react-icons/md";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import { formatPrice } from "src/utils/maths";
import "./BannerCard.scss";

type BannerCardProps = Omit<MenuItem, "isAvailable" | "isAdvertised">;

export default function BannerCard({ id, imageSource, title, price, quantity }: BannerCardProps) {
  const { removeItemFromBasket } = useOrderContext();

  return (
    <div className="banner-card">
      <div className="banner-card-picture">
        <img src={imageSource ? imageSource : "/images/coming-soon.png"} alt={title} />
      </div>
      <div className="banner-card-infos">
        <div className="banner-card-title">{title}</div>
        <div className="banner-card-price">{formatPrice(price)}</div>
      </div>
      <div className="banner-card-qty">x {quantity}</div>
      <button className="banner-card-remove-btn" onClick={() => removeItemFromBasket(id)}>
        <MdDeleteForever size={26} />
      </button>
    </div>
  );
}
