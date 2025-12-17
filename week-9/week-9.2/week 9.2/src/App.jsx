import { memo, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let count = 3
function App() {
  const [todos, settodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym at 8:00"
  },
  {
    id: 2,
    title: "go to gym",
    description: "go to gym at 8:00"
  },
  {
    id: 3,
    title: "go to gym",
    description: "go to gym at 8:00"
  }])
  function addtodo() {
    settodos([...todos, {
      id: ++count,
      title: "go to home",
      description: "go home right now"
    }])
  }

  return (
    <div>
      <button onClick={addtodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

// const Header = memo(
//   function Header({ title }) {
//     return (
//       <div>
//         {title}
//       </div>
//     )
//   })

function Todo({ title, description }) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>
    </div>
  )
}

export default App
