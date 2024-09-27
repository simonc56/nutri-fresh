import { useOrderContext } from "../../../../context/useOrderContext";
import Admin from "../AdminPanel/Admin";
import "./Main.scss";
import Menu from "./Menu";

export default function Main() {
  const { isAdminMode } = useOrderContext();
  return (
    <main className="main">
      {/* <section className="basket">Basket</section> */}
      <section className="menu-and-admin">
        <Menu />
        {isAdminMode && <Admin />}
      </section>
    </main>
  );
}
