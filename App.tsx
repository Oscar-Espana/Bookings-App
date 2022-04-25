import 'react-native-gesture-handler';
import React from 'react';
import GreetingsScreen from './src/screens/GreetingsScreen';
import MainScreen from './src/screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './src/navigation/BottomTabsNavigator';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
