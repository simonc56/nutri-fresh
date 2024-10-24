import BannerCard from "src/components/reusable-ui/BannerCard/BannerCard";
import { MenuItem } from "src/fakeData/fakeMenu";
import "./BasketBody.scss";

type BasketItem = Omit<MenuItem, "isAvailable" | "isAdvertised">;

const EmptyBasket = ({ isLoading }: { isLoading: boolean }) => {
  return <div className="basket-empty">{isLoading ? "Chargement en cours..." : "Votre commande est vide."}</div>;
};

export default function BasketBody({ content, isLoading }: { content: BasketItem[]; isLoading: boolean }) {
  return (
    <main className="basket-content">
      {content.length !== 0 ? (
        content.map((item) => <BannerCard key={item.id} {...item} />)
      ) : (
        <EmptyBasket isLoading={isLoading} />
      )}
    </main>
  );
}
