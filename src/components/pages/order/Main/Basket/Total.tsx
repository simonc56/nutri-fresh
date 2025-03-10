import Counter from "src/components/reusable-ui/Counter/Counter";
import { useOrderContext } from "src/context/useOrderContext";
import { BasketItem } from "src/hooks/useBasket";
import { MenuItem } from "src/startData/startMenu";
import { formatPrice } from "src/utils/maths";
import "./Total.scss";

export default function Total() {
  const { basket, menu } = useOrderContext();

  const totalCalculated = basket.reduce((acc: number, item: BasketItem) => {
    const menuItem = menu.find((menuItem: MenuItem) => menuItem.id === item.id);
    return acc + ((menuItem?.isAvailable && menuItem?.price) || 0) * item.quantity;
  }, 0);

  return (
    <header className="basket-total">
      <div className="basket-total-label">Total</div>
      <div className="basket-total-value">
        <Counter content={formatPrice(totalCalculated)} />
      </div>
    </header>
  );
}
