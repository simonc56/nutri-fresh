import { useEffect } from "react";
import { useOrderContext } from "src/context/useOrderContext";
import { initUserSession } from "src/utils/initUserSession";
import Admin from "../Admin/Admin";
import Basket from "./Basket/Basket";
import "./Main.scss";
import Menu from "./Menu";

export default function Main() {
  const { username, isAdminMode, resetMenu, loadMenu, setBasket, setIsError } = useOrderContext();

  useEffect(() => {
    initUserSession(username, resetMenu, loadMenu, setBasket, setIsError);
  }, [username, resetMenu, loadMenu, setBasket, setIsError]);

  return (
    <main className="main">
      <Basket />
      <section className="menu-and-admin">
        <Menu />
        {isAdminMode && <Admin />}
      </section>
    </main>
  );
}
