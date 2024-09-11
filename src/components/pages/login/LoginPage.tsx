import { useEffect, useState } from "react";
import Logo from "../../reusable-ui/Logo/Logo";
import LoginForm from "./LoginForm";

import Loader from "../../reusable-ui/Loader/Loader";
import "./LoginPage.scss";

export default function LoginPage() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const imageUrl = "/images/food-background.webp";

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsBackgroundLoaded(true);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className="login-page" style={{ backgroundImage: `url(${imageUrl})` }}>
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
