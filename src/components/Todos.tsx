import { useState } from 'react';
import Todo from './Todo';

const TODO_ARRAY = ["My First Todo", "My Second Todo"];

export default function Todos() {
    const [todoList, setTodoList] = useState(TODO_ARRAY);
    function addItemToTodoList(item: string) {
        console.log("add new Todo to list of Todos");
        setTodoList([...todoList, item]);
    }

    return (
        <section>
            <h2>Todos</h2>
            <button onClick={() => addItemToTodoList("New item")}>Add Todo</button>
            <ul>
                {todoList.map(todo => 
                    <li><Todo todoText={todo}/></li>
                )}
            </ul>
        </section>
    );
}