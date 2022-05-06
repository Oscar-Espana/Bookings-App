import {Box} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {typography} from '../../theme/typography';
import {palette} from '../../theme/palette';

const TextSection = ({children}: any) => {
  return (
    <Box mx={8} _text={{...typography.body2, color: palette.neutral}} my={2}>
      {children}
    </Box>
  );
};

export default TextSection;
