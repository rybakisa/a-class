import {ButtonProps} from "../../types";

const Button = ({text, isOutline}: ButtonProps) => {
  return (
    <button className={`button ${isOutline ? "button--outline" : ""}`}>
      {text}
    </button>
  );
};

export default Button;
