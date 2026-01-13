import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

const usePrevious = (value) => {
  const ref = useRef()
  console.log("hii from upside of useeffect");
  
  useEffect(() => {
    console.log("hii from inside of useeffect");
    ref.current = value

  }, [value])
  console.log(ref.current);
  //phle ref.current return ho ja rhi h then useeffect p ja rhi h
  return ref.current
}

function App() {
  const [state, setState] = useState(0)
  const prev = usePrevious(state)
function increase (){
  setState(curr => curr+1)
}
  return (
    <>
      <>
        <button onClick={increase}>current:{state} prev:{prev}: increment</button><br /><br />


      </>
    </>
  )
}

export default App
