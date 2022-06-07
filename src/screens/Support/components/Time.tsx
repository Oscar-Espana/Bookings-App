import {Box, Text} from 'native-base';
import React from 'react';
import {palette} from '../../../theme/palette';

const Time = ({time}: {time: string}) => {
  return (
    <Box flexDirection={'row'} justifyContent={'space-between'} mx={28}>
      <Text color={palette.primary}>{time}</Text>
      <Text color={palette.secondary}>Limpiar</Text>
    </Box>
  );
};

export default Time;
