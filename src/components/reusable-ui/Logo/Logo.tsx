import logo from "../../../assets/logo-orange.png";

import "./Logo.scss";

function Logo() {
  return (
    <div className="logo-text">
      <span>crazee</span>
      <img src={logo} />
      <span>burger</span>
    </div>
  );
}

export default Logo;
