import {Box, Image, Text} from 'native-base';
import React from 'react';
import {palette} from '../../../theme/palette';
import selfie from '../../../assets/icons/selfie.png';
import {StyleSheet} from 'react-native';

const SelfieScanner = () => {
  return (
    <Box justifyContent={'center'}>
      <Text style={styles.label}>Selfie</Text>
      <Box
        height={176}
        justifyContent="center"
        borderColor={palette.gray}
        borderStyle={'dashed'}
        borderWidth={1}
        rounded={16}>
        <Box padding={44} alignItems={'center'}>
          <Image source={selfie} alt={'icon'} />
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

export default SelfieScanner;
