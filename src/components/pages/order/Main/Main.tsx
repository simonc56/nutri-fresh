import AdminPanel from "../AdminPanel/AdminPanel";
import "./Main.scss";
import Menu from "./Menu";

export default function Main() {
  return (
    <main className="main">
      <section className="basket">Basket</section>
      <section className="menu-and-admin">
        <Menu />
        <AdminPanel />
      </section>
    </main>
  );
}
