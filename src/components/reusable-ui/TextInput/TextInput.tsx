import { forwardRef } from "react";

import "./TextInput.scss";

type InputProps = {
  value: string;
  Icon: JSX.Element;
  className?: string;
};

const TextInput = forwardRef(
  (
    { value, Icon, className, ...extraProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={`text-input ${className && className}`}>
        <i className="icon">{Icon}</i>
        <input ref={ref} value={value} {...extraProps} />
      </div>
    );
  }
);

export default TextInput;
