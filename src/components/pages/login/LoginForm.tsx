import { FormEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { createUserWithDefaultMenu } from "src/api/user";
import PrimaryButton from "src/components/reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "src/components/reusable-ui/TextInput/TextInput";
import "./LoginForm.scss";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithDefaultMenu(inputValue);
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  return (
    <form className="login-form" action="submit" onSubmit={handleSubmit}>
      <h2>Des repas savoureux et équilibrés !</h2>
      <br />
      <h3>Connectez-vous</h3>
      <TextInput
        value={inputValue}
        setValue={setInputValue}
        Icon={<PiUserCircleFill />}
        type="text"
        placeholder="Entrez votre prénom"
        aria-label="Entrez votre prénom"
        required
      />
      <PrimaryButton
        label="Accéder à mon espace"
        Icon={<IoIosArrowForward />}
        type="submit"
        className="primary-button__large"
      />
    </form>
  );
}

export default LoginForm;
