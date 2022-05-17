import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TypeKeyword from '../../screens/PreChecking/Login/TypeKeyword';
import Login from '../../screens/PreChecking/Login/Login';
import HowWouldYou from '../../screens/PreChecking/Login/HowWouldYou';
import RequiredActions from '../../screens/PreChecking/RequiredActions/RequiredActions';
import Guests from '../../screens/PreChecking/RequiredActions/Guests';
import Contracts from '../../screens/PreChecking/RequiredActions/Contracts';
import LogoScreen from '../../screens/PreChecking/Greetings/LogoScreen';
import HeyThere from '../../screens/PreChecking/Greetings/HeyThere';
import WelcomeScreen from '../../screens/PreChecking/Greetings/WelcomeScreen';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LogoScreen">
      <Stack.Screen name="LogoScreen" component={LogoScreen} />
      <Stack.Screen name="HeyThere" component={HeyThere} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

      <Stack.Screen name="TypeKeyword" component={TypeKeyword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HowWouldYou" component={HowWouldYou} />
      <Stack.Screen name="RequiredActions" component={RequiredActions} />
      <Stack.Screen name="Guests" component={Guests} />
      <Stack.Screen name="Contracts" component={Contracts} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
