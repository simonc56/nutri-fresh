import { MdDeleteForever } from "react-icons/md";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/fakeData/fakeMenu";
import { formatPrice } from "src/utils/maths";
import Counter from "../Counter/Counter";
import "./BannerCard.scss";

type BannerCardProps = Omit<MenuItem, "isAvailable" | "isAdvertised">;

export default function BannerCard({ id, imageSource, title, price, quantity }: BannerCardProps) {
  const {
    isAdminMode,
    setIsPanelOpen,
    selectTab,
    selectedItem,
    setSelectedItemById,
    removeItemFromBasket,
    unSelectItem,
  } = useOrderContext();
  const isSelected = selectedItem?.id === id;

  const onClickCard = () => {
    if (!isAdminMode) return;
    if (isSelected) {
      unSelectItem();
    } else {
      setSelectedItemById(id);
      selectTab("edit");
      setIsPanelOpen(true);
    }
  };

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeItemFromBasket(id);
  };

  return (
    <article
      className={`banner-card${isAdminMode ? " admin-mode" : ""}${isSelected ? " selected" : ""}`}
      onClick={onClickCard}
    >
      <div className="banner-card-picture">
        <img
          src={imageSource ? imageSource : "/images/bientot-disponible.png"}
          alt={imageSource ? title : "image non disponible"}
        />
      </div>
      <div className="banner-card-infos">
        <h3 className="banner-card-title">{title}</h3>
        <div className={`banner-card-price${isAdminMode && isSelected ? " revert-color" : ""}`}>
          {formatPrice(price)}
        </div>
      </div>
      <div className={`banner-card-qty${isAdminMode && isSelected ? " revert-color" : ""}`}>
        <Counter content={`x ${quantity}`} />
      </div>
      {(!isAdminMode || !isSelected) && (
        <button className="banner-card-remove-btn" onClick={onDelete} aria-label="supprimer" title="Supprimer">
          <MdDeleteForever size={26} />
        </button>
      )}
    </article>
  );
}
