import { useState } from 'react';
import Todo from './Todo';
import MakeTodo from './MakeTodo';
import './Todos.css';

const TODO_ARRAY = [
    { "id": 1, "title": "My First Todo" }
];

export default function Todos() {
    let todoList = TODO_ARRAY;
    let todoIndex = todoList.length;

    const [allTodos, setAllTodos] = useState(TODO_ARRAY);

    const handleClick = (todoInputText: string) => {
        let nextIndex = todoIndex + 1;
        console.log(allTodos);
        todoList.push({"id": nextIndex, "title": todoInputText });
        console.log({"id": nextIndex, "title": todoInputText });
        setAllTodos({...allTodos, [nextIndex]: { "id": nextIndex, "title": "some text here" }}); 
    }

    return (
        <section>
            <h2>Todos</h2>
            <MakeTodo customOnClick={handleClick} />
            <br />
            <ul className='list-group no-bullet'>
                {todoList.map(todo => 
                    <li key={todo.id} className='list-group-item'><Todo todoText={todo.title}/></li>
                )}
            </ul>
            {/* <div data-closable="fade-out" className="todo-list-card card">
                <div className="card-divider">
                    <h3>To Do List</h3>
                    <button className="close-button" data-close>x</button>
                </div>
                <div className="card-section">
                    <ul>
                    <li><input id="item1" type="checkbox"></input><label htmlFor="item1"></label>Item 1</li>
                    {todoList.map(todo =>
                        <li key={todo.id}><Todo todoText={todo.title}/></li>
                    )}
                    </ul>
                </div>
            </div> */}
        </section>
    );
}