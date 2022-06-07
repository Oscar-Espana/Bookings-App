import React from 'react';
import {Box, Image, Text} from 'native-base';
import {TouchableOpacity, ImageSourcePropType} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';

interface Props {
  name: string;
  subtitle?: string;
  onPress?: () => void;
  color?: string;
  icon?: ImageSourcePropType;
}

const ListItemwithIcon = ({
  name,
  onPress,
  subtitle,
  icon,

  color = palette.primary,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        mx={43}
        alignItems={'center'}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Image source={icon} style={{width: 40, height: 40}} alt={'icon'} />
          <Box ml={5}>
            <Text
              style={{
                ...typography.body1Bold,
                color: color,
                fontFamily: 'Trade Gothic LT Std',
                fontStyle: 'normal',
                fontWeight: '400',
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
        </Box>
        <Icon name="chevron-forward" size={20} color={palette.secondary} />
      </Box>
    </TouchableOpacity>
  );
};

export default ListItemwithIcon;
