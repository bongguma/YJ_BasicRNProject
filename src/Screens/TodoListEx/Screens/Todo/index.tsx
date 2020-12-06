import React from 'react';
import Styled from 'styled-components/native';

import TodoListView from '../Todo/TodoListView'
import AddTodo from '../Todo/AddTodo'


const Container = Styled.SafeAreaView`
    flex: 1;
`;

interface Props {}

const Todo = ({}: Props) => {
    return (
        <Container>
            <TodoListView />
            <AddTodo />
        </Container>
    );
};

export default Todo;