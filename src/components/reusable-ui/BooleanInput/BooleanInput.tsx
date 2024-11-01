import { forwardRef } from "react";

import "./BooleanInput.scss";

type InputProps = {
  labels: string[];
  Icon: JSX.Element;
  className?: string;
};

const BooleanInput = forwardRef(
  (
    { labels, id, checked, Icon, className, ...extraProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className="boolean-input">
        <i className="icon">{Icon}</i>
        <label htmlFor={id}>{checked ? labels[0] : labels[1]} </label>
        <input type="checkbox" ref={ref} id={id} checked={checked} {...extraProps} />
      </div>
    );
  }
);

export default BooleanInput;
