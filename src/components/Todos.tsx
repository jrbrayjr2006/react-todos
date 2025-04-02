import { useState } from 'react';
import Todo from './Todo';
import MakeTodo from './MakeTodo';

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
        <section className='container'>
            <h2 className='flex items-center justify-center text-center'>Todos</h2>
            <MakeTodo customOnClick={handleClick} />
            <br />
            <div className="flex flex-col items-left">
                {todoList.length > 0 ? 
                <ul className='list-group no-bullet'>
                    {todoList.map(todo => 
                        <li key={todo.id} className='list-group-item'><Todo todoText={todo.title}/></li>
                    )}
                </ul> : 
                <div>
                    <span>There are currently no Todos!</span>
                </div>}
            </div>

        </section>
    );
}