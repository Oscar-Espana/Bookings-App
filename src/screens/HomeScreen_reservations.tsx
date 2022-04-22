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
          <ReservationsCard data={reservations} />
          <Box flexDirection={'row'} ml={3}>
            <Box
              w={58}
              mt={3}
              ml={3}
              h={58}
              rounded={50}
              borderColor={'white'}
              borderWidth={1}
              justifyContent={'center'}
              alignItems={'center'}
              _text={{
                color: 'white',
                fontSize: 25,
                fontFamily: 'Analogue',
              }}>
              3 / 4
            </Box>
            <SectionTitle title={'Required actions'} />
          </Box>
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
