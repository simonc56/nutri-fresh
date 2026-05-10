import { CSSTransition, TransitionGroup } from "react-transition-group";
import BannerCard from "src/components/reusable-ui/BannerCard/BannerCard";
import { useOrderContext } from "src/context/useOrderContext";
import { useTransitionNodeRef } from "src/hooks/useTransitionNodeRef";
import { MenuItem } from "src/startData/startMenu";
import "./BasketBody.scss";

export default function BasketBody({ content }: { content: MenuItem[] }) {
  const { isLoading, isError } = useOrderContext();
  const { getNodeRef } = useTransitionNodeRef<number, HTMLElement>();

  const EmptyBasket = () => {
    return (
      <div className="basket-empty">
        {isError ? "" : isLoading ? "Chargement en cours..." : "Votre commande est vide."}
      </div>
    );
  };

  return (
    <main className="basket-content">
      {content.length !== 0 ? (
        <TransitionGroup component={null} appear exit>
          {content.map((item) => {
            const nodeRef = getNodeRef(item.id);

            return (
              <CSSTransition key={item.id} nodeRef={nodeRef} timeout={300} classNames="banner">
                <BannerCard ref={nodeRef} {...item} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      ) : (
        <EmptyBasket />
      )}
    </main>
  );
}
