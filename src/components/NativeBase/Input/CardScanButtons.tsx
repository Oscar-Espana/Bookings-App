import {Box, Image, Text} from 'native-base';
import React from 'react';

import {ImageSourcePropType, StyleSheet} from 'react-native';
import {palette} from '../../../theme/palette';

const CardScanButtons = ({
  icon,
  label,
}: {
  icon: ImageSourcePropType;
  label: string;
}) => {
  return (
    <Box justifyContent={'center'}>
      <Text style={styles.label}>{label}</Text>
      <Box
        justifyContent="center"
        borderColor={palette.gray}
        borderStyle={'dashed'}
        borderWidth={1}
        rounded={16}>
        <Box padding={44}>
          <Image source={icon} alt={'icon'} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  label: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});

export default CardScanButtons;
