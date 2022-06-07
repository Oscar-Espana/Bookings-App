import {Box, Image, Text} from 'native-base';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {palette} from '../../theme/palette';

interface Props {
  icon: ImageSourcePropType;
  name: string;
  time: string;
  info?: string;
}

const NotificationItem = ({icon, name, time, info}: Props) => {
  return (
    <Box flexDirection={'row'}>
      <Image
        source={icon}
        style={{width: 48, height: 48}}
        alt={'icon-user'}
        rounded={50}
        mr={4}
      />
      <Box flex={1}>
        <Text style={{color: palette.gray}} flexWrap={'wrap'}>
          <Text style={{color: palette.primary, fontWeight: '700'}}>
            {name}
          </Text>{' '}
          is simply dummy text of the printing and typesetting is simply is
          simply dummy text of the printing and typesetting is simply is simply
          dummy text of the printing and typesetting is simply
        </Text>
        <Text style={{color: palette.secondary}}>{time}</Text>
      </Box>
    </Box>
  );
};

export default NotificationItem;
