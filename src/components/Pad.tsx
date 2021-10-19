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
      <Button text="7" onClickCallback={handleNumberClick} />
      <Button text="8" onClickCallback={handleNumberClick} />
      <Button text="9" onClickCallback={handleNumberClick} />
      <Button text="DEL" onClickCallback={handleDelClick} />
      <Button text="4" onClickCallback={handleNumberClick} />
      <Button text="5" onClickCallback={handleNumberClick} />
      <Button text="6" onClickCallback={handleNumberClick} />
      <Button text="+" onClickCallback={handleNumberClick} />
      <Button text="1" onClickCallback={handleNumberClick} />
      <Button text="2" onClickCallback={handleNumberClick} />
      <Button text="3" onClickCallback={handleNumberClick} />
      <Button text="0" onClickCallback={handleNumberClick} />
      <Button text="RESET" onClickCallback={handleResetClick} />
    </div>
  );
}

export default Pad;