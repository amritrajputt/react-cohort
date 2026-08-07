import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function useToggle(initialValue){
 const [value,setValue] = useState(initialValue)
 const toggle = () => {
   setValue(toggle => !toggle)
   console.log(value)
 }
 return{
  value:value,
  toggle:toggle
 }
}

function App() {
  const {value,toggle} = useToggle(true)

  return (
    <>
      <button onClick={toggle}>{value} toggle</button>
    </>
  )
}

export default App
