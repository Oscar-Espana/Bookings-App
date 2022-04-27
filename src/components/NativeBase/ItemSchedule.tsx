import {Box} from 'native-base';
import React from 'react';
import {palette} from '../../theme/palette';

interface Props {
  type: string;
  time: string;
}

const ItemSchedule = ({time, type}: Props) => {
  return (
    <Box
      flexDirection={'row'}
      borderWidth={1}
      borderColor={palette.neutral}
      borderRadius={16}
      my={2}>
      <Box width={'30%'} _text={{color: palette.secondary}} padding={26}>
        {type}
        {time}
      </Box>

      <Box _text={{color: palette.primary}}>
        En Madrid la hora de {type} es a las {time}
      </Box>
    </Box>
  );
};

export default ItemSchedule;
