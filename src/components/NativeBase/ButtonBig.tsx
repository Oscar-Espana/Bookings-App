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
    <Box
      borderColor={palette.primary}
      borderWidth={2}
      flex={1}
      backgroundColor={color}
      borderRadius={16}
      minHeight={20}
      maxHeight={20}
      flexDirection={'row'}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '100%',
          paddingHorizontal: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          color={color === 'white' ? palette.black : palette.primary}
          fontFamily={'Trade Gothic LT Std'}
          fontSize={16}
          fontWeight={'700'}
          lineHeight={16}
          py={30}>
          {name}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default ButtonBig;
