import BannerCard from "src/components/reusable-ui/BannerCard/BannerCard";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import "./BasketBody.scss";

type BasketItem = Omit<MenuItem, "isAvailable" | "isAdvertised">;

export default function BasketBody({ content }: { content: BasketItem[] }) {
  const { isLoading, isError } = useOrderContext();

  const EmptyBasket = () => {
    return (
      <div className="basket-empty">
        {isError ? "" : isLoading ? "Chargement en cours..." : "Votre commande est vide."}
      </div>
    );
  };

  return (
    <main className="basket-content">
      {content.length !== 0 ? content.map((item) => <BannerCard key={item.id} {...item} />) : <EmptyBasket />}
    </main>
  );
}
