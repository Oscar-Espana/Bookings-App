import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TypeKeyword from '../../screens/PreChecking/Login/TypeKeyword';
import Login from '../../screens/PreChecking/Login/Login';
import HowWouldYou from '../../screens/PreChecking/Login/HowWouldYou';
import RequiredActions from '../../screens/PreChecking/RequiredActions/RequiredActions';
import Guests from '../../screens/PreChecking/RequiredActions/Guests';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TypeKeyword" component={TypeKeyword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HowWouldYou" component={HowWouldYou} />
      <Stack.Screen name="RequiredActions" component={RequiredActions} />
      <Stack.Screen name="Guests" component={Guests} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
