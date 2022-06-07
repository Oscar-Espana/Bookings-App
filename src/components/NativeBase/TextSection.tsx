import {Box} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {typography} from '../../theme/typography';
import {palette} from '../../theme/palette';

interface Props {
  children: any;
  textAlign?: 'center' | 'left' | 'right';
}

const TextSection = ({children, textAlign}: Props) => {
  return (
    <Box
      mx={8}
      _text={{
        ...typography.body2,
        color: palette.neutral,
        textAlign: textAlign,
      }}
      my={0}>
      {children}
    </Box>
  );
};

export default TextSection;
