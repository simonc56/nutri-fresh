import { useOrderContext } from "../../../../context/useOrderContext";
import Admin from "../Admin/Admin";
import Basket from "./Basket/Basket";
import "./Main.scss";
import Menu from "./Menu";

export default function Main() {
  const { isAdminMode } = useOrderContext();
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
