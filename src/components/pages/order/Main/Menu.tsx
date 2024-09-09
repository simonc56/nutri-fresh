import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import ProductCard from "../../../reusable-ui/ProductCard/ProductCard";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      {fakeMenu2.map(({ id, imageSource, title, price }) => (
        <ProductCard key={id} imageSource={imageSource} title={title} price={price} />
      ))}
    </div>
  );
}
