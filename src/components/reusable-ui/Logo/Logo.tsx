import logo from "/images/nutri-fresh-logo.png";

import "./Logo.scss";

function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <h1 className={`logo-text ${className}`} onClick={onClick}>
      <span>NUTRI</span>
      <img src={logo} />
      <span>FRESH</span>
    </h1>
  );
}

export default Logo;
