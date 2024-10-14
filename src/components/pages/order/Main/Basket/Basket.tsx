import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import "./Basket.scss";
import BasketBody from "./BasketBody";
import Total from "./Total";

export default function Basket() {
  const { basket, menu } = useOrderContext();

  const basketContent = basket.map((item) => {
    const menuItem = menu.find((menuItem) => menuItem.id === item.id);
    return menuItem ? { ...menuItem, quantity: item.quantity } : ({} as MenuItem);
  });

  return (
    <section className="basket">
      <Total />
      <BasketBody content={basketContent} />
      <footer className="basket-footer">Codé avec React.js</footer>
    </section>
  );
}
