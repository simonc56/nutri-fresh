import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>ErrorPage</h1>
      <button type="button" onClick={handleClick}>
        Retourner à la page d'accueil
      </button>
    </div>
  );
}

export default ErrorPage;
