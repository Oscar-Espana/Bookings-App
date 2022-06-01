import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {palette} from '../theme/palette';

import HomeScreen_reservations from '../screens/Home/HomeScreen_reservations';
import MyTripNavigator from './MyTripNavigator';
import SupportNavigator from './SupportNavigator';
import ExploreNavigator from './ExploreNavigator';
import ProfileNavigator from './ProfileNavigator';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import AddGuest from '../screens/Staging/AddGuest';
import StagingNavigator from './StagingNavigator';
import {Image} from 'react-native-svg';

import Home from '../assets/icons/home.svg';
import Compass from '../assets/icons/compass.svg';
import Briefcase from '../assets/icons/briefcase.svg';
import Bouy from '../assets/icons/life-buoy.svg';
import User from '../assets/icons/user.svg';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.primary,
        tabBarStyle: {
          backgroundColor: palette.background,
          height: 95,
          shadowColor: 'black',
          shadowOffset: {width: 0.1, height: 0.1},
          shadowOpacity: 0.9,
        },
      }}>
      {/* <Tab.Screen
        name="STAGING"
        component={StagingNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name="HOME"
        component={HomeScreen_reservations}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Home stroke={'white'} />
            ) : (
              <Home stroke={palette.gray} />
            ),
        }}
      />
      <Tab.Screen
        name="EXPLORA"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Compass stroke={'white'} />
            ) : (
              <Compass stroke={palette.gray} />
            ),
        }}
      />
      <Tab.Screen
        name="MI VIAJE"
        component={MyTripNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Briefcase stroke={'white'} />
            ) : (
              <Briefcase stroke={palette.gray} />
            ),
        }}
      />

      <Tab.Screen
        name="SOPORTE"
        component={SupportNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Bouy stroke={'white'} />
            ) : (
              <Bouy stroke={palette.gray} />
            ),
        }}
      />
      <Tab.Screen
        name="MI PERFIL"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <User stroke={'white'} />
            ) : (
              <User stroke={palette.gray} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
