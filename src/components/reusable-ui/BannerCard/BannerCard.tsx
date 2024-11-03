import { MdDeleteForever } from "react-icons/md";
import { useOrderContext } from "src/context/useOrderContext";
import { MenuItem } from "src/startData/startMenu";
import { formatPrice } from "src/utils/maths";
import Counter from "../Counter/Counter";
import Sticker from "../Sticker/Sticker";
import "./BannerCard.scss";

type BannerCardProps = MenuItem;

export default function BannerCard({
  id,
  imageSource,
  title,
  price,
  quantity,
  isAvailable,
  isAdvertised,
}: BannerCardProps) {
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
        {isAdvertised && <Sticker />}
      </div>
      <div className="banner-card-infos">
        <h3 className="banner-card-title">{title}</h3>
        <div className={`banner-card-price${isAdminMode && isSelected ? " revert-color" : ""}`}>
          {isAvailable ? formatPrice(price) : "Non disponible"}
        </div>
      </div>
      <div className={`banner-card-qty${isAdminMode && isSelected ? " revert-color" : ""}`}>
        {isAvailable && <Counter content={`x ${quantity}`} />}
      </div>
      {(!isAdminMode || !isSelected) && (
        <button className="banner-card-remove-btn" onClick={onDelete} aria-label="supprimer" title="Supprimer">
          <MdDeleteForever size={26} />
        </button>
      )}
    </article>
  );
}
