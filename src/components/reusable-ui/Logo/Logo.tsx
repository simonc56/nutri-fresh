import logo from "../../../assets/logo-orange.png";

import "./Logo.scss";

function Logo({ className }: { className?: string }) {
  return (
    <h1 className={`logo-text ${className}`}>
      <span>CRAZEE</span>
      <img src={logo} />
      <span>BURGER</span>
    </h1>
  );
}

export default Logo;
