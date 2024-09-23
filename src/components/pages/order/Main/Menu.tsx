import { useOrderContext } from "../../../../context/OrderContext";
import ProductCard from "../../../reusable-ui/ProductCard/ProductCard";
import "./Menu.scss";

export default function Menu() {
  const { menu } = useOrderContext();
  return (
    <div className="menu">
      {menu.map(({ id, imageSource, title, price }) => (
        <ProductCard key={id} imageSource={imageSource} title={title} price={price} />
      ))}
    </div>
  );
}
