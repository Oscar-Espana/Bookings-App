import {Box} from 'native-base';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {palette} from '../../theme/palette';

interface Props {
  title: string;
  placeholder?: string;
  type?: 'date' | string;
}

const TextInputC = ({title, placeholder, type}: Props) => {
  return (
    <Box px={8} _text={styles.title} flex={1}>
      {title}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={''}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderColor: 'white',
    height: 50,
    borderWidth: 1,
  },
  title: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    linEHeight: 17,
  },
});

export default TextInputC;
