import {Text, Box} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {palette} from '../../theme/palette';

interface Props {
  name?: string;
  color?: 'white' | 'transparent';
  onPress?: () => void;
}

const ButtonBig = ({name, onPress, color = 'transparent'}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        borderColor={palette.primary}
        borderWidth={2}
        backgroundColor={color}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={16}
        padding={5}
        mx={30}>
        <Text
          color={color === 'white' ? palette.black : palette.primary}
          fontFamily={'Trade Gothic LT Std'}
          fontSize={16}
          fontWeight={'700'}
          lineHeight={16}
          py={21}>
          {name}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default ButtonBig;
