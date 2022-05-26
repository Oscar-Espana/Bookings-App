import React from 'react';
import {Box, ScrollView, Text} from 'native-base';
import {ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {typography} from '../theme/typography';
import {palette} from '../theme/palette';
import CardCheckInOut from '../components/NativeBase/CardCheckInOut';
import ButtonBig from '../components/NativeBase/ButtonBig';
import CardReservePriceTotal from '../components/NativeBase/CardReservePriceTotal';
import BackgroundHome from '../components/NativeBase/BackgroundHome';
import SectionTitle from '../components/NativeBase/SectionTitle';

const MainScreenNB = () => {
  return (
    <>
      <BackgroundHome arrivalDays={1} />

      <Box flex={2} bgColor={palette.background}>
        <SectionTitle title={'Tu reserva en curso'} />
        <ScrollView>
          <CardCheckInOut />
          <CardReservePriceTotal />
          <ButtonBig />
        </ScrollView>
      </Box>
    </>
  );
};

export default MainScreenNB;
