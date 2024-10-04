import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../../../context/useOrderContext";
import { notify } from "../../../../utils/notification";
import ToggleButton from "../../../reusable-ui/ToggleButton/ToggleButton";
import "./Profile.scss";

type ProfileProps = {
  username: string;
  isAdmin?: boolean;
};

export default function Profile({ username, isAdmin = true }: ProfileProps) {
  const { isAdminMode, setIsAdminMode } = useOrderContext();

  const toggleAdminMode = () => {
    if (!isAdminMode) notify("Mode admin activé");
    setIsAdminMode(!isAdminMode);
  };

  return (
    <div className="profile">
      {isAdmin && (
        <ToggleButton
          isChecked={isAdminMode}
          onToggle={toggleAdminMode}
          labelIfChecked="Désactiver le mode admin"
          labelIfUnchecked="Activer le mode admin"
        />
      )}
      <div className="user">
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
    </div>
  );
}
