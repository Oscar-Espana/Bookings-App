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
      my={2}
      mx={8}>
      <Box width={'40%'} _text={{color: palette.secondary}} padding={26}>
        {type}
        {time}
      </Box>

      <Box _text={{color: palette.primary}} alignSelf={'center'} width={'55%'}>
        En Madrid la hora de comida es de 8:00AM
      </Box>
    </Box>
  );
};

export default ItemSchedule;
