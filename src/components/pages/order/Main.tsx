import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import ProductCard from "../../reusable-ui/ProductCard/ProductCard";
import "./Main.scss";

export default function Main() {
  return (
    <main className="main">
      {fakeMenu2.map(({ id, imageSource, title, price }) => (
        <ProductCard key={id} imageSource={imageSource} title={title} price={price} />
      ))}
    </main>
  );
}
