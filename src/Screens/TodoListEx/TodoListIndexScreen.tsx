import React from 'react';
import Styled from 'styled-components/native';

import { TodoListContextProvider } from '../TodoListEx/index';
import Todo from '../TodoListEx/Screens/Todo';


const Container = Styled.SafeAreaView`
    flex: 1;
    background-color:#EEE;
`;

// 함수형 컴포넌트
const TodoListIndexScreen = () => {

    return (
        <TodoListContextProvider>
            <Container>
                <Todo />
            </Container>
        </TodoListContextProvider>
    );
};

export default TodoListIndexScreen;