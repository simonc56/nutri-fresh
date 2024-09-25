import { useParams } from "react-router-dom";
import OrderContextProvider from "../../../../context/OrderContext";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./OrderPage.scss";

function OrderPage() {
  const { username } = useParams();

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
