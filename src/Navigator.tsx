/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { StatusBar, SafeAreaView } from 'react-native';
import indexScreen from './Screens/Counter/index';
import TodoListIndexScreen from './Screens/TodoListEx/TodoListIndexScreen';
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
  },
  {
    initialRouteName : "todoListIndex", // 가장 처음 렌더되는 컴포넌트를 불러온다. 즉 HomeScreen를 불러옴
    defaultNavigationOptions : {
      title : "App" 
    }
  }
);

export default createAppContainer(navigator);
