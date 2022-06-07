import {Formik} from 'formik';
import {
  Box,
  Button,
  FormControl,
  Input,
  VStack,
  Select,
  Text,
} from 'native-base';
import React, {ChangeEvent} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import {palette} from '../../theme/palette';
import {userValidation} from '../../lib/validationScheme';

interface Props {
  label: string;
  placeholder?: string;
  type?: 'date' | string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  errorMesagge?: string | undefined;
  hasError?: boolean;
}

const TextInputC = ({
  label,
  placeholder,
  type,
  hasError,
  onBlur,
  onChangeText,
  value,
  errorMesagge,
}: Props) => {
  return (
    <Box py={2}>
      <FormControl isRequired isInvalid={hasError}>
        <Text style={styles.title}>{label}</Text>

        <Input
          _focus={{
            borderColor: palette.primary,
            backgroundColor: 'transparent',
          }}
          color={palette.primary}
          borderColor={palette.gray}
          height={50}
          borderRadius={10}
          onBlur={onBlur}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />

        <FormControl.ErrorMessage>{errorMesagge}</FormControl.ErrorMessage>
      </FormControl>
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
    marginVertical: 10,
    lineHeight: 17,
  },
});

export default TextInputC;
