import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import "./Basket.scss";
import BasketBody from "./BasketBody";
import Total from "./Total";

export default function Basket() {
  const { basket, menu, isLoading } = useOrderContext();

  const basketContent = basket
    .map((item) => {
      const menuItem = menu.find((menuItem) => menuItem.id === item.id);
      return menuItem ? { ...menuItem, quantity: item.quantity } : ({} as MenuItem);
    })
    .filter((item) => Object.keys(item).length > 0); // Remove empty objects (if an id is not in the menu)

  return (
    <section className="basket">
      <h2 className="sr-only">Panier</h2>
      <Total />
      <BasketBody content={basketContent} isLoading={isLoading} />
      <footer className="basket-footer">Codé avec React.js</footer>
    </section>
  );
}
