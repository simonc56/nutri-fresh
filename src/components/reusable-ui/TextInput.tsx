import { ChangeEvent } from "react";

import "./TextInput.scss";

type InputProps = {
  value: string;
  setValue: (arg0: string) => void;
  Icon: JSX.Element;
};

export default function TextInput({
  value,
  setValue,
  Icon,
  ...extraProps
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-firstname">
      <i className="icon">{Icon}</i>
      <input value={value} onChange={handleChange} {...extraProps} />
    </div>
  );
}
