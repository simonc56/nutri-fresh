import unavailableTag from "../../../../public/images/stock-epuise.png";
import "./UnavailableTag.scss";

export default function UnavailableTag() {
  return (
    <div className="unavailable-tag">
      <img src={unavailableTag} alt="tampon indisponible" />
    </div>
  );
}
