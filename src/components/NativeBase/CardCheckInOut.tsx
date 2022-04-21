import React from 'react';
import {Box, Text, Image} from 'native-base';

import CheckInOut from './CheckInOut';

const CardCheckInOut = () => {
  return (
    <Box flex={1} alignItems="center" mb={5}>
      <Image
        source={require('../../assets/images/reserva.png')}
        alt="reserva"
      />
      <Box position={'absolute'} flexDirection={'row'} bottom={30} left={50}>
        <CheckInOut type="CHECK IN" date="02/SEP/2021" />
        <CheckInOut type="CHECK OUT" date="04/OCT/2022" />
      </Box>
    </Box>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  image: {
    borderRadius: 20,
    width: '100%',
  },
  checkinout: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    left: 50,
  },
}); */

export default CardCheckInOut;
