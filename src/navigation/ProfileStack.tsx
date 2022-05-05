import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import SupportScreen from '../screens/Support/SupportScreen';
import Chat from '../screens/Support/Chat';
import Notifications from '../screens/Support/Notifications';
import Telephone from '../screens/Support/Telephone';
import Signature from '../screens/Profile/Signature';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Signature" component={Signature} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
