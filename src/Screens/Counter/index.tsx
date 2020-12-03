import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '../../Components/Button';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = Styled.SafeAreaView`
    flex: 1;
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
    title?: string;
    initValue: number;
}

interface State {
    count:number;
}

// 클래스형 컴포넌트
class Counter extends React.Component<Props, State>{
    
    constructor(props: Props) {
        super(props);
        console.log('constructor');
        
        // State 값 초기화
        this.state = {
            count: props.initValue,
        };
    }

    // render 라이프 사이클 적용
    render() {
        const {title} = this.props;
        const {count} = this.state;

        return (
            <Container>
                { title && (
                    <TitleContainer>
                        <TitleLabel>{title}</TitleLabel>
                    </TitleContainer>
                )}
                <CountContainer>
                    <CountLabel>{count}</CountLabel>
                </CountContainer>
                <ButtonContainer>
                    <Button iconName="add" onPress={() => this.setState({count : count + 1})} />
                    <Button iconName="remove" onPress={() => this.setState({count : count - 1})} />
                </ButtonContainer>
            </Container>
        )
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State){
        console.log('getDerivedStateFromProps');

        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
        console.log('getSnapshotBeforeUpdate');
        return{
            testData : true,
        };
    }

    componentDidUpdate(prevProps: Props, prevState: State){
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps: Props, nextState: State){
        console.log('shouldComponentUpdate');

        return true;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    componentDidCatch(error: Error, info: React.ErrorInfo){
        this.setState({
            // error: true,
        });
    }
}

// 함수형 컴포넌트
/*const Counter = ({title, initValue}: Props) => {
    const [count, setCount] = useState<number>(0);

    return (
        <Container>
            { title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <CountContainer>
                <CountLabel>{initValue + count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="add" onPress={() => setCount(count + 1)} />
                <Button iconName="remove" onPress={() => setCount(count - 1)} />
            </ButtonContainer>
        </Container>
    );
};*/

export default Counter;