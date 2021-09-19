interface Props {
  text: string;
  isOutline?: boolean;
}

const Button = ({text, isOutline}: Props) => {
  return (
    <button className={`button ${isOutline ? "button--outline" : ""}`}>
      {text}
    </button>
  );
};

export default Button;
