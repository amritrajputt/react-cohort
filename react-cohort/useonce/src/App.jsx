import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

const useOnce = (fn) => {
  const [isRan,setIsRan] = useState(false)
    const ref = useRef()
    useEffect(()=>{
        if (ref) {
          setIsRan(isRan => !isRan)
        }else{
          setIsRan(isRan => !isRan)
        }
    })
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    </>
  )
}

export default App
