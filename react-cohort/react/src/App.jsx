import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <div>
      <Header/>
    </div>
  )
}

function Header(){
  return (
  <div style={{display:'flex',float:'right', justifyContent:'space-around', margin:'10px', border: "1px solid black"}}>
<App/>
     <div >
          
      <ul style={{listStyle:'none', display:'flex'}}>
        <li style={{padding:'10px'}}>Home</li>
        <li style={{padding:'10px'}}>About</li>
        <li style={{padding:'10px'}}>Contact</li>
        <li style={{padding:'10px'}}>Cart</li>
      </ul>
     </div>
    </div>
  )
}

export default App
