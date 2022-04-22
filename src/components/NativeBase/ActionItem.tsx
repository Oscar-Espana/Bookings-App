import {Box, Image} from 'native-base';
import React from 'react';

import {palette} from '../../theme/palette';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';

interface Props {
  icon: ImageSourcePropType;
  name: string;
}

const ActionItem = ({icon, name}: Props) => {
  return (
    <TouchableOpacity>
      <Box
        _text={{
          color: palette.primary,
          fontSize: 11,
          fontFamily: 'Trade Gothic LT Std Extended',
        }}
        justifyContent={'center'}
        alignItems={'center'}>
        <Box
          w={70}
          h={70}
          bg={palette.background}
          rounded={16}
          justifyContent={'center'}
          alignItems={'center'}
          shadow={4}>
          <Image source={icon} alt="icon" />
        </Box>
        {name}
      </Box>
    </TouchableOpacity>
  );
};

export default ActionItem;
