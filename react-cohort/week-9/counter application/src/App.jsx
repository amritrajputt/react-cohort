import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const increaseCount = () => {
  setCount(count+1) ; 
 }
  return (
    <>
          <div>Counter</div>
          <button  onClick = {increaseCount}>Count {count}</button>
    </>
  )
}

export default App
