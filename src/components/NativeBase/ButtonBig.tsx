import {Text, Box} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {palette} from '../../theme/palette';

interface Props {
  name?: string;
  onPress?: () => void;
}

const ButtonBig = ({name, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        borderColor={palette.primary}
        borderWidth={2}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={16}
        padding={5}
        margin={30}>
        <Text
          color={palette.primary}
          fontFamily={'Trade Gothic LT Std'}
          fontSize={16}
          fontWeight={'700'}
          lineHeight={16}>
          {name}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default ButtonBig;
