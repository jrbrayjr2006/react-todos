import React from 'react';
import { Button, Colors, Sizes } from 'react-foundation';

const TodoForm = () => {
    return (
        <div>
            <p>Add a new Todo:</p>
            <input type="text" placeholder="enter todo here" name="todoInput" />
            <Button color={Colors.PRIMARY} size={Sizes.LARGE}>Create Todo</Button>
            <Button color={Colors.WARNING} size={Sizes.LARGE}>Clear All</Button>
        </div>
    );
}

export default TodoForm;