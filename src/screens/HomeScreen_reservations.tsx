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

const HomeScreen_reservations = () => {
  return (
    <>
      <BackgroundHome arrivalDays={0} />
      <Box flex={2} backgroundColor={palette.background}>
        <ScrollView>
          <SectionTitle title={'Your Reservations'} />
          <ReservationsCard data={reservations} horizontal={true} />

          <SectionTitle title={'Required actions'} />

          <RequiredActions />

          <SectionTitle title={'Timeline'} />
          <Timeline data={timeline} />
          <SectionTitle title={'Plans & Services'} />
          <PlansServicesCard data={planservices} />
        </ScrollView>
      </Box>
    </>
  );
};

export default HomeScreen_reservations;
