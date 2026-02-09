import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter/Counter';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c)=> c+ 1);
  const handleReset = () => setCount(0);

  return (
     <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Click Counter</h1>

      <Counter
        count={count}
        onIncrement={handleIncrement}
        onReset={handleReset}
      />
    </div>
  )
}
