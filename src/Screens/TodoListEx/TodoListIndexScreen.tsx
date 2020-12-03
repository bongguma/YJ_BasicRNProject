import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '../../Components/Button';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color:#00d593;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;

`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {  
}

interface State {
    count:number;
}

// 함수형 컴포넌트
const TodoListIndexScreen = ({}: Props) => {
    const [count, setCount] = useState<number>(0);

    return (
        <Container>
            {/* { count && (
                <TitleContainer>
                    <TitleLabel>타이틀</TitleLabel>
                </TitleContainer>
            )}
            <CountContainer>
                <CountLabel>{count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="add" onPress={() => setCount(count + 1)} />
                <Button iconName="remove" onPress={() => setCount(count - 1)} />
            </ButtonContainer> */}
        </Container>
    );
};

export default TodoListIndexScreen;