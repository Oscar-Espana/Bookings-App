import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import SignScreen from '../screens/Profile/SignScreen';
import Notifications from '../screens/Support/Notifications';
import Contract from '../screens/Profile/Contract';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Signature" component={SignScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Contract" component={Contract} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
