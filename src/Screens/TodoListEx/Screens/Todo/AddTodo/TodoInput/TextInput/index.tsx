import React, { useContext } from 'react';
import Styled from 'styled-components/native';

import { TodoListContext } from '../../../../../../TodoListEx';

const Container = Styled.KeyboardAvoidingView`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
`;

const Input = Styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: #FFF;
    padding: 0px 8px;
`;

interface Props {
    hideTodoInput: () => void;
}

const TextInput = ({ hideTodoInput }: Props) => {
    const { addTodoList } = useContext<ITodoListContext>(TodoListContext);

    return (
        <Input 
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="할 일을 입력한다."
            returnKeyType="done"
            onSubmitEditing={({ nativeEvent }) => {
                addTodoList(nativeEvent.text);
                hideTodoInput();
            }} />
    );
};

export default TextInput;