import {Box, ScrollView, Select, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextSection from '../../../components/NativeBase/TextSection';
import TextInputC from '../../../components/NativeBase/TextInputC';
import SelectInput from '../../../components/NativeBase/SelectInput';
import GenderInput from '../../../components/NativeBase/Input/GenderInput';
import {Formik} from 'formik';
import {userValidation} from '../../../lib/validationScheme';
import DateInput from '../../../components/NativeBase/Input/DateInput';
import {StyleSheet} from 'react-native';
import {palette} from '../../../theme/palette';

interface Props {
  onPress: () => void;
  handleSubmit: () => void;
}

const PersonalInformation = ({onPress, handleSubmit}: Props) => {
  let [service, setService] = React.useState('');
  const onSubmit = (data: any) => {
    console.log('submiting with ', data);
  };

  return (
    <ScrollView flex={1}>
      <SectionTitle title="Personal Information" />
      <TextSection>Make sure the images are clear.</TextSection>

      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        validationSchema={userValidation}
        onSubmit={onSubmit}
        /* validate={validate} */
      >
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <VStack px={30}>
            <TextInputC
              label={'User'}
              placeholder={'Enter username'}
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
              errorMesagge={errors.user}
              hasError={'user' in errors}
            />
            <TextInputC
              label={'Password'}
              placeholder={'Enter password'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMesagge={errors.password}
              hasError={'password' in errors}
            />
          </VStack>
        )}
      </Formik>

      <Box flexDirection={'row'} justifyContent={'space-between'} mx={30}>
        <SelectInput label={'Nationality'} />
        <DateInput />
      </Box>

      <VStack p={30}>
        <GenderInput label={'Gender'} />
      </VStack>

      <ButtonBig name="NEXT" onPress={onPress} />
    </ScrollView>
  );
};

export default PersonalInformation;
