import "./UnavailableTag.scss";
import unavailableTag from "/images/stock-epuise.png";

export default function UnavailableTag() {
  return (
    <div className="unavailable-tag">
      <img src={unavailableTag} alt="tampon indisponible" />
    </div>
  );
}
