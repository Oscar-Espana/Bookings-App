import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore_screen from '../screens/Explore/Explore_screen';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Explora: undefined;
};

const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explora" component={Explore_screen} />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
