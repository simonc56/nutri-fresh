import { MenuItem } from "src/fakeData/fakeMenu";
import { formatPrice } from "src/utils/maths";
import "./BannerCard.scss";

type BannerCardProps = Omit<MenuItem, "isAvailable" | "isAdvertised">;

export default function BannerCard({ imageSource, title, price, quantity }: BannerCardProps) {
  return (
    <div className="banner-card">
      <div className="banner-card-picture">
        <img src={imageSource} alt={title} />
      </div>
      <div className="banner-card-infos">
        <div className="banner-card-title">{title}</div>
        <div className="banner-card-price">{formatPrice(price)}</div>
      </div>
      <div className="banner-card-qty">x {quantity}</div>
    </div>
  );
}
