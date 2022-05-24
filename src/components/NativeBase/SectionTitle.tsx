import {Box, Text} from 'native-base';
import React from 'react';
import {typography} from '../../theme/typography';
import {palette} from '../../theme/palette';

interface Props {
  title: string;
  upperTitle?: string;
}

const SectionTitle = ({title, upperTitle}: Props) => {
  return (
    <>
      {upperTitle && (
        <Box
          marginLeft={22}
          pl={2}
          _text={{
            color: palette.gray,
            fontSize: 12,
            lineHeight: 24,
            fontWeight: 400,
            fontFamily: 'Trade Gothic LT Std',
          }}>
          {upperTitle}
        </Box>
      )}
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        marginLeft={22}
        padding={2}
        mt={2}
        mb={3}
        alignItems={'center'}>
        <Text style={typography.heading3}>{title}</Text>
        <Box w={'100%'} ml={3} borderBottomWidth={1} borderColor={'white'} />
      </Box>
    </>
  );
};

export default SectionTitle;
