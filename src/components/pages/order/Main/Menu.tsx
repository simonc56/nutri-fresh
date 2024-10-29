import PrimaryButton from "src/components/reusable-ui/PrimaryButton/PrimaryButton";
import ProductCard from "src/components/reusable-ui/ProductCard/ProductCard";
import { useOrderContext } from "src/context/useOrderContext";
import "./Menu.scss";

export default function Menu() {
  const { menu, isLoading, isError, removeItemFromMenu, resetMenu, isAdminMode, removeItemFromBasket } =
    useOrderContext();

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.stopPropagation();
    removeItemFromMenu(id);
    removeItemFromBasket(id);
  };

  const Message = ({ content }: { content: string }) => {
    return (
      <div className="empty-menu">
        <p>{content}</p>
      </div>
    );
  };

  const UserEmptyMenu = () => {
    return (
      <div className="empty-menu">
        <h2>Victime de notre succès ! :D</h2>
        <p>De nouvelles recettes sont en cours de préparation.</p>
        <p>A très vite !</p>
      </div>
    );
  };

  const AdminEmptyMenu = () => {
    return (
      <div className="empty-menu">
        <h2>Le menu est vide ?</h2>
        <p>Cliquez ci-dessous pour le réinitialiser</p>
        <PrimaryButton onClick={resetMenu} label="Générer de nouveaux produits" />
      </div>
    );
  };

  if (isError) return <Message content="Oups, problème d'accès !" />;
  if (isLoading) return <Message content="Chargement en cours..." />;

  return menu.length > 0 ? (
    <div className="menu-container">
      <div className="menu">
        <h2 className="sr-only">Menu</h2>
        {menu.map(({ id, imageSource, title, price }) => (
          <ProductCard
            key={id}
            id={id}
            imageSource={imageSource}
            title={title}
            price={price}
            onDelete={(event) => onDelete(event, id)}
          />
        ))}
      </div>
    </div>
  ) : isAdminMode ? (
    <AdminEmptyMenu />
  ) : (
    <UserEmptyMenu />
  );
}
