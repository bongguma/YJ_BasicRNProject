import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
`;
const Icon = Styled.Image`
`;

// 타입스크립트로 Props 타입을 지정함
interface Props {
    iconName: 'add' | 'remove';
    onPress?: () => void;
}

// Button 컴포넌트 
const Button = ({iconName, onPress}: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source = {
                    iconName === 'add' ? require('../../Assets/Images/add_circle.png') : 
                    require('../../Assets/Images/remove_circle.png')
                }/>
        </Container>
    );
};

export default Button;