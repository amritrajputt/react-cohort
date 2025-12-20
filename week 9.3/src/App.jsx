import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div style={{backgroundColor:'gray', height: "100vh"}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <PostComponent />
  
    </div>
    </div>
  )
}

function PostComponent() {
  return (
    <div style={{
      width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray",
      borderWidth: 1,padding:20
    }}>
    <div style={{
      display:"flex"
    }}>
      <img src="https://shorturl.at/CRSLd" style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop:14
      }} />
      <div style={{fontSize:13 , margin:10}}>
        <b>100xdev</b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
      
    </div>
<div style={{fontSize:14}}>
        want to know how i got 15lpa job in my last semester
      </div>
      </div>
  )
}

export default App
