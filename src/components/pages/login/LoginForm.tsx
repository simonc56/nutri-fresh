import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        name="firstname"
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        required
      />
      <button type="submit">Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
