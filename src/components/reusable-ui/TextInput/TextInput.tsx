import { ChangeEvent } from "react";

import "./TextInput.scss";

type InputProps = {
  value: string;
  setValue: (arg0: string) => void;
  Icon: JSX.Element;
  className?: string;
};

export default function TextInput({
  value,
  setValue,
  Icon,
  className,
  ...extraProps
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input ${className && className}`}>
      <i className="icon">{Icon}</i>
      <input value={value} onChange={handleChange} {...extraProps} />
    </div>
  );
}
