import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Increment />
      <Increment />
      <Increment />
    </>
  )
}


const Increment = () => {
  const [notificationCount, setnotificationCount] = useState(0)
  function increment() {
    setnotificationCount(notificationCount + 1)
  }
  return (
    <div>
      <button onClick={increment}>
        toggle message
      </button>
      {notificationCount}
    </div>
  )
}

export default App
