import "./ToggleButton.scss";

type ToggleButtonProps = {
  isChecked: boolean;
  onToggle: () => void;
  labelIfChecked?: string;
  labelIfUnchecked?: string;
};

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}: ToggleButtonProps) {
  return (
    <div className="toggle-button">
      <input type="checkbox" className="toggle" id="rounded" checked={isChecked} onChange={onToggle} />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
    </div>
  );
}
