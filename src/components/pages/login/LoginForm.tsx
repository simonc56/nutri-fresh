import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "src/components/reusable-ui/PrimaryButton/PrimaryButton";
import TextInput from "src/components/reusable-ui/TextInput/TextInput";
import "./LoginForm.scss";

function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername("");
    navigate(`/order/${username}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <form className="login-form" action="submit" onSubmit={handleSubmit}>
      <h2>Des repas savoureux et équilibrés !</h2>
      <br />
      <h3> </h3>
      <TextInput
        value={username}
        Icon={<PiUserCircleFill />}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        aria-label="Entrez votre prénom"
        required
      />
      <PrimaryButton
        label="Accéder au magasin"
        Icon={<IoIosArrowForward />}
        type="submit"
        className="primary-button__large"
      />
    </form>
  );
}

export default LoginForm;
