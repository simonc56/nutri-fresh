import { FormEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";

import "./LoginForm.scss";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  return (
    <form className="login-form" action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <TextInput
        value={inputValue}
        setValue={setInputValue}
        Icon={<PiUserCircleFill />}
        placeholder="Entrez votre prénom..."
        aria-label="Entrez votre prénom"
        required
      />
      <button type="submit">
        Accéder à mon espace <IoIosArrowForward />
      </button>
    </form>
  );
}

export default LoginForm;
