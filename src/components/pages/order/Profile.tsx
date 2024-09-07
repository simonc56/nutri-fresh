import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Profile.scss";

export default function Profile({ username }: { username: string }) {
  return (
    <div className="profile">
      <div className="admin-mode"></div>
      <div className="user-info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">Se déconnecter</Link>
      </div>
      <div className="user-picture">
        <BsPersonCircle />
      </div>
    </div>
  );
}
