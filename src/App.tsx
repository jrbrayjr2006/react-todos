import './App.css'
import Todos from './components/Todos';

/**
 * Renders the main application component for a custom todo list.
 * It displays a header and includes the Todos component for managing tasks.
 * 
 * @returns JSX.Element - The rendered application component.
 * @throws None
 */
function App() {

  return (
    <>
      <h1>My Custom Todo List</h1>
      <Todos />
    </>
  )
}

export default App
