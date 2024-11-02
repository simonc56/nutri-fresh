import "./Ribbon.scss";

export default function Ribbon({ label = "new" }: { label: string }) {
  return (
    <div className="ribbon">
      <span className="ribbon-left"></span>
      <span className="label">{label}</span>
      <span className="ribbon-right"></span>
    </div>
  );
}
