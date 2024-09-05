type PrimaryButtonProps = {
  label: string;
  Icon: JSX.Element;
};

import "./PrimaryButton.scss";

export default function PrimaryButton({
  label,
  Icon,
  ...extraProps
}: PrimaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="primary-button" {...extraProps}>
      {label} {Icon}
    </button>
  );
}
