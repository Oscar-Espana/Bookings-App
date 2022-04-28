import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import SupportScreen from '../screens/Support/SupportScreen';
import Chat from '../screens/Support/Chat';
import Notifications from '../screens/Support/Notifications';
import Telephone from '../screens/Support/Telephone';

const Stack = createStackNavigator();

const SupportNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Support" component={SupportScreen} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Telephone" component={Telephone} />
    </Stack.Navigator>
  );
};

export default SupportNavigator;
