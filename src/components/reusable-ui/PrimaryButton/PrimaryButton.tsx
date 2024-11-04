type PrimaryButtonProps = {
  label: string;
  Icon?: JSX.Element;
  className?: string;
  clickAllowed?: boolean;
};

import "./PrimaryButton.scss";

export default function PrimaryButton({
  label,
  Icon,
  className = "",
  clickAllowed = true,
  ...extraProps
}: PrimaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`primary-button ${className} ${!clickAllowed && "no-click"}`} {...extraProps}>
      {label} {Icon && Icon}
    </button>
  );
}
