import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'
function App() {

  const [input, setInput] = useState("");
  const count = useRef(1);


  useEffect(() => {
    //setCount(prev => prev+1)
    count.current += 1;
  })

  return (
    <div className="App">
      <input type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button >Click ME!</button>
      <div>You entered {input}</div>

      <div>Count is: {count.current}</div>
    </div>
  );
}

export default App;
