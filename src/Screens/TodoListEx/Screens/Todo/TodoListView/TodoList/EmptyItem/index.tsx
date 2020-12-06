import React, {useContext} from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Label = Styled.Text``;

interface Props {}

const EmptyItem = ({}: Props) => {

    return (
        <Container>
            <Label> 하단 "+" 버튼을 눌러 새로운 할 일을 등록해 본다.</Label>
        </Container>
    );
};

export default EmptyItem;