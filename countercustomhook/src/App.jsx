import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useCounter () {
    const [count,setCount] = useState(0)
    const incrementCount = () => {
      setCount(count => count+1)
    }
    return{
      count : count,
      increment : incrementCount
    }
}
 // this app function use custom counter hook 
function App() {
  //destructure value that is returned by custom hook
  const {count, increment} = useCounter()

  return (
    <>
      <button onClick={increment}>{count} : increment</button>
    </>
  )
}

export default App
