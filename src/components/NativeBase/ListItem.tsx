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
  color?: string;
}

const ListItem = ({
  name,
  onPress,
  subtitle,
  color = palette.primary,
}: Props) => {
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
              color: color,
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 18,
              letterSpacing: 0.4,
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
