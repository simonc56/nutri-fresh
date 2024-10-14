import Logo from "src/components/reusable-ui/Logo/Logo";
import "./Navbar.scss";
import Profile from "./Profile";

export default function Navbar({ username }: { username: string }) {
  return (
    <nav className="navbar">
      <Logo className="logo-order-page" onClick={() => window.location.reload()} />
      <Profile username={username} />
    </nav>
  );
}
