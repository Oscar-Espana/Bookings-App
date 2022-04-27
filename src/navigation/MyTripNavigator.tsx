import React from 'react';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import MyTrip from '../screens/MyTrip/MyTrip';
import Documentation from '../screens/MyTrip/Documentation';
import Tips from '../screens/MyTrip/Tips';
import FoodSchedule from '../screens/MyTrip/FoodSchedule';
import CovidMeasures from '../screens/MyTrip/CovidMeasures';
import CurrencyConverter from '../screens/MyTrip/CurrencyConverter';
import SizeConverter from '../screens/MyTrip/SizeConverter';
import NightLeasure from '../screens/MyTrip/NightLeasure';
import Dictionary from '../screens/MyTrip/Dictionary';

const Stack = createStackNavigator();

export type RootStackParamList = {
  MyTrip: undefined;
  Documentation: undefined;
  Tips: undefined;
  FoodSchedule: undefined;
  NightLeasure: undefined;
  SizeConverter: undefined;
  CovidMeasures: undefined;
  CurrencyConverter: undefined;
  Dictionary: undefined;
};

const MyTripNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyTrip" component={MyTrip} />

      <Stack.Screen name="Documentation" component={Documentation} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="FoodSchedule" component={FoodSchedule} />
      <Stack.Screen name="NightLeasure" component={NightLeasure} />
      <Stack.Screen name="SizeConverter" component={SizeConverter} />
      <Stack.Screen name="CovidMeasures" component={CovidMeasures} />
      <Stack.Screen name="CurrencyConverter" component={CurrencyConverter} />
      <Stack.Screen name="Dictionary" component={Dictionary} />
    </Stack.Navigator>
  );
};

export default MyTripNavigator;
