import { formatPrice } from "src/utils/maths";
import "./Total.scss";

export default function Total({ amount }: { amount: number }) {
  return (
    <header className="basket-total">
      <div className="basket-total-label">Total</div>
      <div className="basket-total-value">{formatPrice(amount)}</div>
    </header>
  );
}
