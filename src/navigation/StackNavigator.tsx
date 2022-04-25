import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScroll from '../screens/HomeScroll';
import ReservesScreen from '../screens/ReservesScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScroll" component={HomeScroll} />
      <Stack.Screen name="Reserves" component={ReservesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
