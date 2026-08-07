import { memo, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const [todos, setTodos] = useState([])
useEffect(() => {
  fetch("https://sum-server.100xdevs.com/todos")
  .then(async(res)=>{
    const json = res.json();
    setTodos(json.todos)
  })
}, [])

function App() {
  return (
    <div>
    {todos.map(todo => <Todos title= {title} description={description} /> )}
    </div>
  )
}

// using memo hook

// const Header = memo(
//   function Header({ title }) {
//     return (
//       <div>
//         {title}
//       </div>
//     )
//   })

function Todos({ title,description }) {
  return (
    <div style={{ border: "5px solid black", padding: "10px" }}>
     <h1>
      {title}
     </h1>
     <h4>
      {description}
     </h4>
    </div>
  )
}

export default App
