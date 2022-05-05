import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {palette} from '../theme/palette';
import {Image} from 'react-native';
import HomeScreen_reservations from '../screens/HomeScreen_reservations';
import MyTripNavigator from './MyTripNavigator';
import SupportNavigator from './SupportNavigator';
import ExploreNavigator from './ExploreNavigator';
import ProfileNavigator from './ProfileNavigator';
import ProfileScreen from '../screens/Profile/ProfileScreen';

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
        component={ExploreNavigator}
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
        component={ProfileNavigator}
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
