import { forwardRef } from "react";
import { TbSwitchVertical } from "react-icons/tb";
import Counter from "../Counter/Counter";
import "./BooleanInput.scss";

type InputProps = {
  labels: string[];
  Icon: JSX.Element;
};

const BooleanInput = forwardRef(
  (
    { labels, id, checked, Icon, ...extraProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className="boolean-input">
        <i className="icon">{Icon}</i>
        <label htmlFor={id}>
          <Counter content={checked ? labels[0] : labels[1]} isLeftAlign />
        </label>
        <input type="checkbox" ref={ref} id={id} checked={checked} {...extraProps} />
        <i className="toggle-icon">
          <TbSwitchVertical />
        </i>
      </div>
    );
  }
);

export default BooleanInput;
