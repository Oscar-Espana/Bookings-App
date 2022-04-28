import {Box, Heading} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';

interface Props {
  title: string;
  onPress: () => void;
}

const TitleCentered = ({title, onPress}: Props) => {
  return (
    <Box
      safeArea
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      px={3}
      flexDirection="row">
      <Box>
        <TouchableOpacity onPress={onPress}>
          <Icon name="arrow-back" size={30} color={palette.secondary} />
        </TouchableOpacity>
      </Box>

      <Heading style={typography.heading2} color={'black'}>
        {title}
      </Heading>

      <Box w={30} h={30} />
    </Box>
  );
};

export default TitleCentered;
