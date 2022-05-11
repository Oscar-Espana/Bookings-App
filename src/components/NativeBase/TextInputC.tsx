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
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {palette} from '../../theme/palette';

interface Props {
  label: string;
  placeholder?: string;
  type?: 'date' | string;
}

const TextInputC = ({label, placeholder, type}: Props) => {
  const onSubmit = (data: any) => {
    console.log('submiting with ', data);
  };

  const validate = (values: any) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      onSubmit={onSubmit}
      validate={validate}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <Box py={2}>
          <FormControl style={{}} isRequired isInvalid={'firstName' in errors}>
            <FormControl.Label>
              <Text style={styles.title}>{label}</Text>
            </FormControl.Label>

            <Input
              variant={'rounded'}
              style={{
                borderColor: 'white',
                height: 50,
              }}
              onBlur={handleBlur('firstName')}
              placeholder={placeholder}
              onChangeText={handleChange('firstName')}
              value={values.firstName}
            />

            <FormControl.ErrorMessage>
              {errors.firstName}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      )}
    </Formik>
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
    lineHeight: 17,
  },
});

export default TextInputC;
