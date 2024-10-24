import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadBasket } from "src/api/basket";
import { dbAuthenticateUser } from "src/api/user";
import PrimaryButton from "src/components/reusable-ui/PrimaryButton/PrimaryButton";
import ProductCard from "src/components/reusable-ui/ProductCard/ProductCard";
import { useOrderContext } from "src/context/useOrderContext";
import { notify } from "src/utils/notification";
import "./Menu.scss";

export default function Menu() {
  const {
    menu,
    isLoading,
    isError,
    setIsError,
    loadMenu,
    removeItemFromMenu,
    resetMenu,
    isAdminMode,
    setBasket,
    removeItemFromBasket,
  } = useOrderContext();
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      dbAuthenticateUser(username)
        .then((isNewUser) => {
          if (isNewUser) {
            resetMenu();
          } else {
            loadMenu().then((isSuccess) => {
              if (!isSuccess) {
                notify("Erreur lors du chargement du menu");
              }
              const basket = loadBasket(username);
              if (basket) setBasket(basket);
            });
          }
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [username]);

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
  ) : isAdminMode ? (
    <AdminEmptyMenu />
  ) : (
    <UserEmptyMenu />
  );
}
