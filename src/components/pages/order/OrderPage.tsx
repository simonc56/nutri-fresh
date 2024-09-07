import { useParams } from "react-router-dom";

import Main from "./Main";
import Navbar from "./Navbar";
import "./OrderPage.scss";

function OrderPage() {
  const { username } = useParams();

  return (
    <div className="order-page">
      <div className="container">
        <Navbar username={username || ""} />
        <Main />
      </div>
    </div>
  );
}

export default OrderPage;
