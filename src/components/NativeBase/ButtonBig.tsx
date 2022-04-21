import {Text, Box} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {palette} from '../../theme/palette';

const ButtonBig = () => {
  return (
    <TouchableOpacity>
      <Box
        borderColor={palette.primary}
        borderWidth={2}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={16}
        padding={5}
        mx={28}>
        <Text
          color={palette.primary}
          fontFamily={'Trade Gothic LT Std Extended'}
          fontSize={16}
          fontWeight={'700'}
          lineHeight={16}>
          NEXT
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default ButtonBig;
