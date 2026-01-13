import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useCounter () {
    const [count,setCount] = useState(0)

    const incrementCount = () => {
      setCount(count => count+1)
    }
    const decreaseCount = () => {
      setCount(count => count-1)
    }
    const resetCount = () => {
      setCount(0)
    }
    return[count, incrementCount, decreaseCount,resetCount]
}
 // this app function use custom counter hook 
function App() {
  //destructure value that is returned by custom hook
  const [count, incrementCount, decreaseCount,resetCount] = useCounter()

  return (
    <>
      <button onClick={incrementCount}>{count} : increment</button>
      <button onClick={decreaseCount}>{count} : decrease</button>
      <button onClick={resetCount}>{count} : reset</button>
    </>
  )
}

export default App
