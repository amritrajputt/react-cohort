import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
    useEffect(() => {
     const id =  setInterval(() => {
        setCount(count => count+1)
      },1000)
      
    }, [])

  function IncreaseCount(){
    setCount(count+1)
  }

   return (
    <>
      <div>counter app that changes count every 1 second using useEffect</div>
      <h1>Count{count}</h1>
      <button onClick={IncreaseCount}>Increase </button>
    </>
  )
}

export default App
