import logo from "../../../assets/logo-orange.png";

import "./Logo.scss";

function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <h1 className={`logo-text ${className}`} onClick={onClick}>
      <span>CRAZEE</span>
      <img src={logo} />
      <span>BURGER</span>
    </h1>
  );
}

export default Logo;
