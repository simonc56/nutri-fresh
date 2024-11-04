import { ChangeEvent, forwardRef } from "react";

import "./TextInput.scss";

type InputProps = {
  value: string;
  setValue: (arg0: string) => void;
  Icon: JSX.Element;
  className?: string;
};

const TextInput = forwardRef(
  (
    { value, setValue, Icon, className, ...extraProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <div className={`text-input ${className && className}`}>
        <i className="icon">{Icon}</i>
        <input ref={ref} value={value} onChange={handleChange} {...extraProps} />
      </div>
    );
  }
);

export default TextInput;
