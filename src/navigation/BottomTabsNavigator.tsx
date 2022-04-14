import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import GreetingsScreen from '../screens/GreetingsScreen';
import {palette} from '../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: palette.background,
          /*  shadowColor: 'black',
          shadowOffset: {width: 0.1, height: 0.1},
          shadowOpacity: 0.9, */
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home-outline" size={30} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="EXPLORA"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="compass-outline" size={24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="MI VIAJE"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="airplane-outline" size={24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="SOPORTE"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="settings-outline" size={24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="MI PERFIL"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="person-outline" size={24} color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
