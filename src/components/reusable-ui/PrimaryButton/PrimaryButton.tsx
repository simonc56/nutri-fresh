type PrimaryButtonProps = {
  label: string;
  Icon?: JSX.Element;
  className?: string;
};

import "./PrimaryButton.scss";

export default function PrimaryButton({
  label,
  Icon,
  className,
  ...extraProps
}: PrimaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`primary-button ${className}`} {...extraProps}>
      {label} {Icon && Icon}
    </button>
  );
}
