/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { StatusBar, SafeAreaView } from 'react-native';
import Counter from '../../YJ_BasicRNProject/src/Screens/Counter';
import React, {Fragment} from 'react';

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

const App  = ({}:Props) => {
  return (
    // 제일 처음 실행했을 때 보이는 APP.tsx
    /*<>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to change this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>See your Changes</SectionDescription>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>Debug</SectionDescription>
                <SectionDescription>
                  <DebugInstructions />
                </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>
                Learn More
              </SectionDescription>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>*/

    <Container>
      <Counter title="First Ex Project" initValue={5}></Counter>
    </Container>
  );
};

export default App;
