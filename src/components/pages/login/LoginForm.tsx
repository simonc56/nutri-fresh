import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import "./LoginForm.scss";

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
    <form className="login-form" action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <div className="input-firstname">
        <i className="icon">
          <PiUserCircleFill />
        </i>
        <input
          type="text"
          name="firstname"
          value={inputValue}
          onChange={handleChange}
          placeholder="Entrez votre prénom..."
          required
        />
      </div>
      <button type="submit">
        Accéder à mon espace <IoIosArrowForward />
      </button>
    </form>
  );
}

export default LoginForm;
