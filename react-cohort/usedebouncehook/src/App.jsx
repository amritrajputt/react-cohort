import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function useDebounce() {
  const currentClock = useRef()
  const fn = () => {
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalfn, 300);
  }
  return fn
}

function App() {

  function sendBackDataToBackend() {
    fetch("")
  }

  const debouncedFn = useDebounce(sendBackDataToBackend)
  return (
    <>
    <input type='text' onChange={debouncedFn}/>
    </>
  )
}

export default App
