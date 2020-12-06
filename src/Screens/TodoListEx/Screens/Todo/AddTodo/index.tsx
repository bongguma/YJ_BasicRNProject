import React, { useState } from 'react';

import AddButton from '../AddTodo/AddButton'
import TodoInput from '../AddTodo/TodoInput'

interface Props {}

const AddTodo = ({}: Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);

    return (
        <>
            <AddButton onPress={() => setShowInput(true)} />
            {showInput && <TodoInput hideTodoInput={() => setShowInput(false)}
            />}
        </>
    );
};

export default AddTodo;