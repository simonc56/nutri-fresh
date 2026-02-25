import { useEffect, useState } from "react";
import Loader from "src/components/reusable-ui/Loader/Loader";
import Logo from "src/components/reusable-ui/Logo/Logo";
import LoginForm from "./LoginForm";
import "./LoginPage.scss";

const IMAGE_URL = "/images/food-background.webp";

export default function LoginPage() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsBackgroundLoaded(true);
    };
    img.src = IMAGE_URL;
  }, []);

  return (
    <div className="login-page" style={{ backgroundImage: `url(${IMAGE_URL})` }}>
      {isBackgroundLoaded ? (
        <>
          <Logo className="logo-login-page" />
          <LoginForm />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
