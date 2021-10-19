interface ButtonProps {
  text: string,
  onClickCallback: Function
}

function Button({
  text,
  onClickCallback
}: ButtonProps) {
  return (
    <div>
      <button onClick={() => onClickCallback(text)}>{text}</button>
    </div>
  );
}

export default Button;