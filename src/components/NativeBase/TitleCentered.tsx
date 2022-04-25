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
    <Box safeArea justifyItems={'center'}>
      <TouchableOpacity onPress={onPress}>
        <Box position={'absolute'} ml={8} mt={0}>
          <Icon name="arrow-back" size={30} color={palette.secondary} />
        </Box>
      </TouchableOpacity>
      <Box padding={2} alignItems={'center'}>
        <Heading
          style={typography.heading2}
          position={'absolute'}
          color={'black'}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default TitleCentered;
