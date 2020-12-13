import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '../Context/User';

import Loading from '../Screen/Loading';
import Login from '../Screen/Login';
import MovieHome from '../Screen/MoviewHome';
import MovieDetail from '../Screen/MovieDetail';

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "Login"
                component={Login}
                options={{
                    title:`MOVIEAPP`,
                    headerTransparent: true,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
            }}/>
        </Stack.Navigator>
    )
}

const MovieNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "MovieHome"
                component={MovieHome}
                options={{
                    title:`MOVIEAPP`,
                    headerTintColor: `#E70915`,
                    headerStyle: {
                        backgroundColor: '#141414',
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
            }}/>
            <Stack.Screen 
                name= "MovieDetail"
                component={MovieDetail}
                options={{
                    title:`MOVIEAPP`,
                    headerTintColor: `#E70915`,
                    headerStyle: {
                        backgroundColor: '#141414',
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false,
            }}/>
        </Stack.Navigator>
    );
};

export default () => {
    const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

    console.log(isLoading);
    console.log(userInfo);
    if(isLoading === false) {
        return <Loading/>;
    }

    return (
        <NavigationContainer>
            {userInfo ? <MovieNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}
