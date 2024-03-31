import { useState } from 'react';
import Todo from './Todo';
import MakeTodo from './MakeTodo';

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
        console.log({"id": nextIndex, "title": "some text here" });
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
        </section>
    );
}