import { useParams } from "react-router-dom";
import AdminPanel from "./AdminPanel/AdminPanel";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import "./OrderPage.scss";

function OrderPage() {
  const { username } = useParams();

  return (
    <div className="order-page">
      <div className="container">
        <Navbar username={username || ""} />
        <Main />
        <AdminPanel />
      </div>
    </div>
  );
}

export default OrderPage;
