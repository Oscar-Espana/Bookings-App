import {Box, Text} from 'native-base';
import React from 'react';
import {typography} from '../../theme/typography';

interface Props {
  title: string;
}

const SectionTitle = ({title}: Props) => {
  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      marginLeft={22}
      padding={2}>
      <Text style={typography.heading3}>{title}</Text>
      <Text color={'white'}>______________________</Text>
    </Box>
  );
};

export default SectionTitle;
