import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import AddGuest from '../screens/Staging/AddGuest';
import Scanner from '../screens/Staging/AddGuestStages/Scanner';
import GrantAccessEmail from '../screens/Staging/GrantAccessEmail';
import TravelInformation from '../screens/PreChecking/RequiredActions/TravelInformation';
import FinishSettings from '../screens/Staging/FinishSettings';
import BeginVideo from '../screens/Staging/BeginVideo';

const Stack = createStackNavigator();

const StagingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Staging" component={AddGuest} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="GrantAccessEmail" component={GrantAccessEmail} />

      <Stack.Screen name="FinishSettings" component={FinishSettings} />
      <Stack.Screen name="BeginVideo" component={BeginVideo} />
    </Stack.Navigator>
  );
};

export default StagingNavigator;
