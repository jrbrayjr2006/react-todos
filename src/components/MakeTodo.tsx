import { useState } from 'react';

export default function MakeTodo({ customOnClick }: { customOnClick: (todoInputText: string) => void }) {
    const [todoText, setTodoText] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value)
    };

    const handleClick = () => {
        customOnClick(todoText);
        setTodoText("");
    }

    return (
        <>
            <span>New Todo: </span><input id="todoInput" type="text" onChange={handleInputChange} value={todoText} placeholder="enter todo here" />
            <button onClick={() => handleClick()} className='submit button'>Add Todo</button>
        </>
    );
}