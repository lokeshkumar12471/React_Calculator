import { useState } from 'react';
import swal from 'sweetalert';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handler = (e) => {
    if (isNaN(e.target.value)) {
      swal('Error', "Expecting a Number", 'error');
    } else {
      setInput(e.target.value);
    }
  }
  return (
    <div className="App">
      <input type='text' name='input' value={input} onChange={handler} />
      <br />
      <button onClick={() => setResult(eval(input))}>results</button>
      <br />
      <h1>Result is {result}</h1>
      <button onClick={() => setInput(input + "1")}>1</button>
      <button onClick={() => setInput(input + "2")}>2</button>
      <button onClick={() => setInput(input + "3")}>3</button>
      <button onClick={() => setInput(input + "4")}>4</button>
      <button onClick={() => setInput(input + "5")}>5</button>
      <br />
      <button onClick={() => setInput(input + "6")}>6</button>
      <button onClick={() => setInput(input + "7")}>7</button>
      <button onClick={() => setInput(input + "8")}>8</button>
      <button onClick={() => setInput(input + "9")}>9</button>
      <button onClick={() => setInput(input + "0")}>0</button>

      <br />
      <button onClick={() => setInput(input + "*")}>x</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      <button onClick={() => setInput(input + "/")}>/</button>
      <button onClick={() => setInput("")}> Clear</button>
    </div>
  );
}

export default App;
