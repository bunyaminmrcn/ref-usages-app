import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'


import CustomInput from './CustomInput';

function App() {

  const [input, setInput] = useState("");
  const count = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    //setCount(prev => prev+1)
    count.current += 1;
  })


  const clickHandler = () => {
    console.log(inputRef.current)
    const value = inputRef.current.value;//html element value
    if(!value) inputRef.current.focus();
    else alert(value)
  }
  return (
    <div className="App">
      <CustomInput ref={inputRef} type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={clickHandler}>Click ME!</button>

      <div>You entered {input}</div>
      <div>Count is: {count.current}</div>
    </div>
  );
}

export default App;
