import { useState } from 'react';
import Todo from './Todo';
import MakeTodo from './MakeTodo';
// import './Todos.css';

const TODO_ARRAY: { id: number, title: string }[] = [];

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
            {todoList.length > 0 ? 
            <ul className='list-group no-bullet'>
                {todoList.map(todo => 
                    <li key={todo.id} className='list-group-item'><Todo todoText={todo.title}/></li>
                )}
            </ul> : 
            <div>
                <span>There are currently no Todos!</span>
            </div>}
        </section>
    );
}