import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import HomeScroll from '../screens/HomeScroll';
import ReservesScreen from '../screens/ReservesScreen';
import StayScreen from '../screens/StayScreen';

const Stack = createStackNavigator();

export type RootStackParamList = {
  HomeScroll: undefined;
  Reserves: undefined;
  Stay: undefined;
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScroll" component={HomeScroll} />
      <Stack.Screen
        options={{
          presentation: 'card',
        }}
        name="Reserves"
        component={ReservesScreen}
      />
      <Stack.Screen name="Stay" component={StayScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
