import { FormEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "src/components/reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "src/components/reusable-ui/TextInput/TextInput";
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
      <h1>Des repas savoureux et équilibrés !</h1>
      <br />
      <h2>Connectez-vous</h2>
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
