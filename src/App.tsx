import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Pad from './components/Pad';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumberClick = (number: number) => {
    setDisplayValue(displayValue === '0' ? number.toString() : displayValue.concat(number.toString()));
  }

  const handleDelClick = () => {
    const value = displayValue.slice(0, -1);
    setDisplayValue(value.length ? value : "0");
  }

  const handleResetClick = () => {
    setDisplayValue("0");
  }

  const result = () => {

  }

  return (
    <div className="App">
      <div className="calculator">
        <Display value={displayValue} />
        <Pad handleNumberClick={handleNumberClick} handleDelClick={handleDelClick} handleResetClick={handleResetClick} />
      </div>
    </div>
  );
}

export default App;
