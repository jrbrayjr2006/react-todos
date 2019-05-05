import React from 'react';
import { Row, Column } from 'react-foundation-components/lib/grid';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  return (
    <div className="App container">
      <Row>
        <Column xxlarge={12}>
          <header className="App-header">
            <h1>Current Todos List</h1>
          </header>
        </Column>
        
      </Row>
      <Row>
        <Column xxlarg={12}>
          <TodoForm />
        </Column>
      </Row>
    </div>
  );
}

export default App;
