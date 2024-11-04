import "./Sticker.scss";

export default function Sticker({ label = "new" }: { label?: string }) {
  return <span className="sticker">{label}</span>;
}
