import React from 'react';
import Styled from 'styled-components/native';

import Header from '../TodoListView/Header';
import TodoList from '../TodoListView/TodoList';


const Container = Styled.SafeAreaView`
    flex: 1;
`;

interface Props {}

const TodoListView = ({}: Props) => {
    return (
        <Container>
            <Header />
            <TodoList />
        </Container>
    );
};

export default TodoListView;