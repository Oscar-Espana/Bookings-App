import {Box, Image, Text} from 'native-base';
import React from 'react';
import {palette} from '../../theme/palette';
import plan_events from '../../assets/images/planservices/plans_events.png';
import {typography} from '../../theme/typography';
import {IGuest, IReservations} from '../../interfaces/IReservations';

interface Props {
  data: IReservations;
}

const CardBlack = ({data}: Props) => {
  return (
    <Box
      mx={28}
      my={3}
      h={124}
      bg={palette.background}
      rounded={16}
      flexDirection={'row'}>
      <Box w={104} h={104} m={2}>
        <Image alt={'plan'} source={plan_events} />
      </Box>

      <Box p={15}>
        <Text style={{...typography.body1Bold, color: palette.primary}}>
          {data.name}
        </Text>
        <Text
          fontFamily="Trade Gothic LT Std"
          fontStyle="normal"
          fontWeight="400"
          fontSize={14}
          lineHeight={24}
          color={palette.neutral}>
          Friday, 23th, Feb, 2021
        </Text>
        <Box w={100} flexDirection={'row'}>
          {data.guests.map((item: IGuest, index: number) => {
            return <Image alt={'guest'} source={item.img} w={8} h={8} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default CardBlack;
