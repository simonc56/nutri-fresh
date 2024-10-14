import { fakeBasket } from "src/fakeData/fakeBasket";
import "./Basket.scss";
import BasketBody from "./BasketBody";
import Total from "./Total";

export default function Basket() {
  return (
    <section className="basket">
      <Total amount={0} />
      <BasketBody content={fakeBasket.MEDIUM} />
      <footer className="basket-footer">Codé avec React.js</footer>
    </section>
  );
}
