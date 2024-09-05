import Logo from "../../reusable-ui/Logo/Logo";
import LoginForm from "./LoginForm";

import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <div className="login-page">
      <Logo />
      <LoginForm />
    </div>
  );
}
