import React from 'react';
import {Box, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';

interface Props {
  name: string;
  subtitle?: string;
  onPress?: () => void;
}

const ListItem = ({name, onPress, subtitle}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        mx={43}
        alignItems={'center'}>
        <Box>
          <Text
            style={{
              ...typography.body1Bold,
              color: palette.primary,
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 22,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: palette.gray,
              fontFamily: 'Trade Gothic LT Std',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 24,
              textAlign: 'left',
            }}>
            {subtitle}
          </Text>
        </Box>
        <Icon name="chevron-forward" size={20} color={palette.secondary} />
      </Box>
    </TouchableOpacity>
  );
};

export default ListItem;
