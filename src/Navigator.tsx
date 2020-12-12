/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 // navigator를 배우기 전에 내가 이용했던 navigator
/*import { StatusBar, SafeAreaView } from 'react-native';
import indexScreen from './Screens/Counter/index';
import TodoListIndexScreen from './Screens/TodoListEx/TodoListIndexScreen';
import WeatherViewScreen from './Screens/WeatherView/WeatherViewScreen';
import React, {Fragment} from 'react';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
  background-color : ${Colors.lighter};
`;

interface Props {}

const navigator = createStackNavigator(
  {
    todoListIndex : TodoListIndexScreen,
    weatherView : WeatherViewScreen,
  },
  {
    initialRouteName : "weatherView", // 가장 처음 렌더되는 컴포넌트를 불러온다. 즉 HomeScreen를 불러옴
    defaultNavigationOptions : {
      title : "App" 
    }
  }
);

export default createAppContainer(navigator);
*/


// navigator 예제 학습 중
import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '../src/Screens/MovieApp/Screen/Navigator'

import {UserContextProvider} from '../src/Screens/MovieApp/Context/User';

const App = () => {
  return(
    <UserContextProvider>
      <StatusBar barStyle = "light-content" />
      <Navigator />
    </UserContextProvider>
  );
};

 export default App;