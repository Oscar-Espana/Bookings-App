import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import MyTrip from '../screens/MyTrip/MyTrip';

const Stack = createStackNavigator();

export type RootStackParamList = {
  MyTrip: undefined;
};

const MyTripNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyTrip" component={MyTrip} />
    </Stack.Navigator>
  );
};

export default MyTripNavigator;
