import React from 'react';
import {Box, Text} from 'native-base';
import {palette} from '../../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const MoreDropdown = () => {
  return (
    <TouchableOpacity>
      <Box
        rounded={16}
        borderWidth={1}
        borderColor={palette.neutral}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        mx={21.5}
        p={21.5}>
        <Text lineHeight={21.6} fontSize={18} color={palette.primary}>
          Saber mas
        </Text>

        <Icon name="chevron-down" size={14} color={palette.neutral} />
      </Box>
    </TouchableOpacity>
  );
};

export default MoreDropdown;
