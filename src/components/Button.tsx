interface ButtonProps {
  text: string,
  onClickCallback: Function
  estilo: string
}

function Button({
  text,
  onClickCallback,
  estilo
}: ButtonProps) {
  return (
    
      <button className={estilo} onClick={() => onClickCallback(text)}>{text}</button>
    
  );
}

export default Button;