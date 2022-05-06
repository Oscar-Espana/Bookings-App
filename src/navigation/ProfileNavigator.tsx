import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import SignScreen from '../screens/Profile/SignScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Signature" component={SignScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
