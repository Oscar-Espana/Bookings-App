import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import GreetingsScreen from '../screens/GreetingsScreen';
import {palette} from '../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

import HomeIcon from '../assets/icons/home.svg';
import ProfileScreen from '../screens/ProfileScreen';
import MainScreenNB from '../screens/MainScreenNB';
import HomeScreen_reservations from '../screens/HomeScreen_reservations';
import HomeScroll from '../screens/HomeScroll';
import StackNavigator from './StackNavigator';
import MyTripNavigator from './MyTripNavigator';
import SupportNavigator from './SupportNavigator';
import Explore_screen from '../screens/Explore/Explore_screen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.primary,
        tabBarStyle: {
          backgroundColor: palette.background,

          /*  shadowColor: 'black',
          shadowOffset: {width: 0.1, height: 0.1},
          shadowOpacity: 0.9, */
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen_reservations}
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
        component={Explore_screen}
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
        component={MyTripNavigator}
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
        component={SupportNavigator}
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
        component={ProfileScreen}
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
