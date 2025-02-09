import React, {useContext} from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '../../../../../TodoListEx';

import EmptyItem from '../TodoList/EmptyItem';
import TodoItem from '../TodoList/TodoItem';

const Container = Styled(FlatList)`
`;

interface Props {}

const TodoList = ({}: Props) => {
    const { todoList, removeTodoList } = useContext<ITodoListContext>(TodoListContext);

    return (
        <Container
            data={todoList}
            keyExtractor = {(item, index) => {
                return `todo-${index}`;
            }}
            ListEmptyComponent = {<EmptyItem/>}
            renderItem={({item, index}) => (
                <TodoItem
                    text = {item as string}
                    onDelete={() => removeTodoList(index)}
                />
            )}
            contentContainerStyle={todoList.length === 0 && {flex: 1}}
        />
    );
};

export default TodoList;