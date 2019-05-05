import React from 'react';
import Todo from './Todo/Todo';

const Todos = () => {
    let numTodos = 0;
    return (
        <div>
            <p>There are {numTodos} todos</p>
            <Todo />
        </div>
    );
}

export default Todos;