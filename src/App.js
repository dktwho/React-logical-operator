import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  console.log('app')
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }
  return (
    <div className="App">
      <Counter count={count}/>
      <Button incr={increment}/>
      <Button incr={increment} />
      <Button incr={increment} />
      <div >{count > 0 ? <button style={{backgroundColor: 'lightgreen'}} onClick={reset}>reset</button>: ''}</div>
     
    </div>
  );
}

export default App;
