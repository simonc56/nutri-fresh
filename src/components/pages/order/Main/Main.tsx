import { useEffect } from "react";
import { useOrderContext } from "src/context/useOrderContext";
import { initUserSession } from "src/utils/initUserSession";
import Admin from "../Admin/Admin";
import Basket from "./Basket/Basket";
import "./Main.scss";
import Menu from "./Menu";

export default function Main() {
  const { username, resetMenu, setBasket } = useOrderContext();

  useEffect(() => {
    initUserSession(username, resetMenu, setBasket);
  }, [username]);

  return (
    <main className="main">
      <Basket />
      <section className="menu-and-admin">
        <Menu />
        <Admin />
      </section>
    </main>
  );
}
