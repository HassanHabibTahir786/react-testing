import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}
console.log(replaceCamelWithSpaces('Blue'));
function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div >
      <button onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
      <input type="checkbox"
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}


export default App;
