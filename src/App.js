import './App.css';
import { useState } from "react";

function App() {
  const[count , setCount] = useState(0)
  const increment = () =>{
    setCount(count + 1);
  }
  const decrement = () =>{
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className='count'>{count}</div>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;