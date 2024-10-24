import Logo from "src/components/reusable-ui/Logo/Logo";
import { useOrderContext } from "src/context/useOrderContext";
import "./Navbar.scss";
import Profile from "./Profile";

export default function Navbar() {
  const { username } = useOrderContext();
  return (
    <nav className="navbar">
      <Logo className="logo-order-page" onClick={() => window.location.reload()} />
      <Profile username={username} />
    </nav>
  );
}
