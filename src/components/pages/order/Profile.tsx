import { Link } from "react-router-dom";
import "./Profile.scss";

export default function Profile({ username }: { username: string }) {
  return (
    <div className="profile">
      <h1>Hey, {username}</h1>
      <br />
      <Link to="/">
        <button type="button">Se déconnecter</button>
      </Link>
    </div>
  );
}
