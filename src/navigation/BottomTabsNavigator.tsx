import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import GreetingsScreen from '../screens/GreetingsScreen';
import {palette} from '../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.primary,
        tabBarStyle: {
          backgroundColor: palette.background,
          height: 80,

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
            <Image
              source={require('../assets/icons/home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EXPLORA"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/compass.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MI VIAJE"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/briefcase.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SOPORTE"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/life-buoy.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MI PERFIL"
        component={GreetingsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/user.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
