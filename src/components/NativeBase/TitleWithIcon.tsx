import {Box, Heading} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';

interface Props {
  title: string;
}

const TitleWithIcon = ({title}: Props) => {
  return (
    <Box
      safeArea
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      mx={30}>
      <Box w={44} h={44} />

      <Heading style={typography.heading2} color={'black'}>
        {title}
      </Heading>

      <Box
        width={44}
        height={44}
        borderRadius={50}
        borderWidth={1}
        justifyContent={'center'}
        alignItems={'center'}
        borderColor={palette.primary}>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default TitleWithIcon;
