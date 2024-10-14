import { useEffect, useState } from "react";
import Loader from "src/components/reusable-ui/Loader/Loader";
import Logo from "src/components/reusable-ui/Logo/Logo";
import LoginForm from "./LoginForm";
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
