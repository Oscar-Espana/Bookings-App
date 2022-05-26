import {Box, Image, Heading} from 'native-base';
import React from 'react';
import {IGuest} from '../../interfaces/IReservations';

interface Props {
  data: IGuest[];
}

const GuestCard = ({data}: Props) => {
  return (
    <Box flexDirection={'row'} flexWrap="wrap" width={'90%'} mx={8}>
      {data.map(item => (
        <Box key={item.id} mb={5} mr={2}>
          <Image source={item.img} alt="guests" width={71} height={71} />
        </Box>
      ))}
    </Box>
  );
};

export default GuestCard;
