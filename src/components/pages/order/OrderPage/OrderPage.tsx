import { useParams } from "react-router-dom";
import OrderContextProvider from "src/context/OrderContextProvider";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./OrderPage.scss";

function OrderPage() {
  const { username } = useParams();
  document.title = `Nutri Fresh | ${username}`;

  return (
    <OrderContextProvider>
      <div className="order-page">
        <div className="container">
          <Navbar username={username || ""} />
          <Main />
        </div>
      </div>
    </OrderContextProvider>
  );
}

export default OrderPage;
