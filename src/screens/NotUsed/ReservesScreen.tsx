import {Box, Center, Heading, Text} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReservationsCard from '../components/NativeBase/ReservationsCard';
import {paletteRGBA, palette} from '../theme/palette';
import {typography} from '../theme/typography';
import {reservations} from '../constants/home/reservations';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleCentered from '../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import BackgroundwithGradient from '../components/NativeBase/BackgroundwithGradient';

const ReservesScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <BackgroundwithGradient>
        <TitleCentered title="RESERVAS" onPress={() => navigation.goBack()} />

        <ReservationsCard
          data={reservations}
          horizontal={false}
          onPress={item => navigation.navigate('Stay', {item})}
        />
      </BackgroundwithGradient>
    </Box>
  );
};

export default ReservesScreen;
