import {Box, Image, Text} from 'native-base';
import React from 'react';
import {palette} from '../../../theme/palette';
import selfie from '../../../assets/icons/selfie.png';
import {StyleSheet, TouchableOpacity} from 'react-native';

const SelfieScanner = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
            <Image source={selfie} alt={'icon'} w={16} h={12} />
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});

export default SelfieScanner;
