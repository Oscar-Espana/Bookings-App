import {Box, ScrollView, Text} from 'native-base';
import React from 'react';
import BackgroundHome from '../components/NativeBase/BackgroundHome';
import ReservationsCard from '../components/NativeBase/ReservationsCard';
import SectionTitle from '../components/NativeBase/SectionTitle';
import {palette} from '../theme/palette';
import {reservations} from '../constants/home/reservations';
import PlansServicesCard from '../components/NativeBase/PlansServicesCard';
import {planservices} from '../constants/home/planservices';
import Timeline from '../components/NativeBase/Timeline';
import {timeline} from '../constants/home/timeline';
import RequiredActions from '../components/NativeBase/RequiredActions';
import CardCheckInOut from '../components/NativeBase/CardCheckInOut';
import CardReservePriceTotal from '../components/NativeBase/CardReservePriceTotal';
import ButtonBig from '../components/NativeBase/ButtonBig';

const HomeScreen_reservations = () => {
  return (
    <Box backgroundColor={palette.background} flex={1}>
      <BackgroundHome arrivalDays={0} />
      <Box flex={2}>
        <ScrollView>
          <SectionTitle title={'Your Reservations'} />
          <ReservationsCard
            data={reservations}
            horizontal={true}
            onPress={() => console.log('')}
          />

          <SectionTitle title={'Required actions'} />
          <RequiredActions />

          <SectionTitle title={'Timeline'} />
          <Timeline data={timeline} />

          <SectionTitle title={'Plans & Services'} />
          <PlansServicesCard data={planservices} />

          <SectionTitle title={'Tu reserva en curso'} />
          <CardCheckInOut />
          <CardReservePriceTotal />
        </ScrollView>
      </Box>
    </Box>
  );
};

export default HomeScreen_reservations;
