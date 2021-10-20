import Button from './Button';
import './Pad.css';

interface PadProps {
  handleNumberClick: Function,
  handleDelClick: Function,
  handleResetClick: Function,
 
}

function Pad({
  handleNumberClick,
  handleDelClick,
  handleResetClick,
}: PadProps) {

  return (
    
    <div className="Pad">
      <Button estilo="BotaoNumero" text="7 " onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="8" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="9" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="DEL" onClickCallback={handleDelClick} /> 
      <Button estilo="BotaoNumero" text="4" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="5" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="6" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="+" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="1" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="2" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="3" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="-" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="." onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="0" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="/" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="x" onClickCallback={handleNumberClick} />
      <Button estilo="BotaoNumero" text="RESET" onClickCallback={handleResetClick} />
      <Button estilo="BotaoNumero" text="=" onClickCallback={handleNumberClick} />
    </div>
  );
}

export default Pad;