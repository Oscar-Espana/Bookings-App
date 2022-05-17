import {Box, Text} from 'native-base';
import React from 'react';
import {palette} from '../../../../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const AddGuestButton = () => {
  return (
    <TouchableOpacity>
      <Box
        alignSelf={'center'}
        w={71}
        h={71}
        rounded={50}
        borderWidth={1}
        borderStyle="dashed"
        borderColor={palette.secondary}
        justifyContent="center"
        alignItems="center">
        <Icon name="add" size={24} color={palette.secondary} />
      </Box>
      <Text
        mt={2}
        alignSelf={'center'}
        fontFamily="Trade Gothic LT Std"
        fontStyle="normal"
        fontWeight="400"
        color={palette.secondary}
        fontSize={10}
        lineHeight={12}
        textAlign="center">
        ADD GUEST
      </Text>
    </TouchableOpacity>
  );
};

export default AddGuestButton;
