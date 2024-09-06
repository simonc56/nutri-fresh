import Logo from "../../reusable-ui/Logo/Logo";
import "./Navbar.scss";
import Profile from "./Profile";

export default function Navbar({ username }: { username: string }) {
  return (
    <nav className="navbar">
      <Logo />
      <Profile username={username} />
    </nav>
  );
}
