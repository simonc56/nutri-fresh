import BannerCard from "src/components/reusable-ui/BannerCard/BannerCard";
import { MenuItem } from "src/fakeData/fakeMenu";
import "./BasketBody.scss";

type BasketItem = Omit<MenuItem, "isAvailable" | "isAdvertised">;

const EmptyBasket = () => {
  return <div className="basket-empty">Votre commande est vide.</div>;
};

export default function BasketBody({ content }: { content: BasketItem[] }) {
  return (
    <main className="basket-content">
      {content.length === 0 ? <EmptyBasket /> : content.map((item) => <BannerCard key={item.id} {...item} />)}
    </main>
  );
}
