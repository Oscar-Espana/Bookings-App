import React from 'react';
import {Box, Text, Image, HStack} from 'native-base';

import CheckInOut from './CheckInOut';

const CardCheckInOut = () => {
  return (
    <Box flex={1} alignItems="center" mb={5}>
      <Image
        source={require('../../assets/images/reserva.png')}
        alt="reserva"
      />
      <HStack
        position={'absolute'}
        flexDirection={'row'}
        bottom={3}
        left={50}
        space={2}>
        <CheckInOut type="CHECK IN" date="02/SEP/2021" />
        <CheckInOut type="CHECK OUT" date="04/OCT/2022" />
      </HStack>
    </Box>
  );
};

export default CardCheckInOut;
