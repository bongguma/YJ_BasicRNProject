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

const Body = Styled.View`
  background-color : ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionDescription = Styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight: 700;
`;

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
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
