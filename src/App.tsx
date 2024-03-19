import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Custom Todo List</h1>
      <Todos />
    </>
  )
}

export default App
