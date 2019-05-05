import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <input type="checkbox" name={props.todoName} value={props.todoValue} /> {props.todoText}
        </div>
    );
}

export default Todo;