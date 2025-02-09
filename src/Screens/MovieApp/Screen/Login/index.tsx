import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import {Linking} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {UserContext} from '../../Context/User';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #141414;
    align-items: center;
    justify-content: center;
`;

const FormContainer = Styled.View`
    width: 100%;
    padding: 40px;
`;

const PasswordResset = Styled.Text`
    width: 100%;
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;

interface Props {
    navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
    const {login} = useContext<IUserContext>(UserContext);

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Container>
            <FormContainer>
                <Input style={{marginBottom: 16}} placeholder="이메일" />
                <Input style={{marginBottom: 16}} 
                    placeholder="비밀번호"
                    secureTextEntry={true} />
                <Button style={{marginBottom : 24}}
                         label="로그인"
                         onPress={() => {
                            login('dev.yakuza@gmail.com', 'password');
                         }}
                />
                <PasswordResset
                onPress={() => {
                    Linking.openURL('https://dev-yakuza.github.io/ko/');
                }}>비밀번호 재설정
                </PasswordResset>
            </FormContainer>
        </Container>
    );
};

export default Login;