import { useNavigate, useParams } from "react-router-dom";

function OrderPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Bonjour {name}</h1>
      <br />
      <button type="button" onClick={handleClick}>
        Déconnexion
      </button>
    </div>
  );
}

export default OrderPage;
