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
import {StyleSheet, Button} from 'react-native';
import {palette} from '../../../theme/palette';

interface Props {
  onPress: () => void;
  handleSubmit: () => void;
}

type gender = 'M' | 'Other' | 'F';

const PersonalInformation = ({onPress}: Props) => {
  let [service, setService] = React.useState('');
  const onSubmit = (data: any) => {
    console.log('submiting with ', data);
    onPress();
  };

  return (
    <ScrollView flex={1}>
      <SectionTitle title="Personal Information" />
      <TextSection>Make sure the images are clear.</TextSection>

      <Formik
        initialValues={{
          user: 'HOASS',
          password: 'SSS12345',
          nationality: 'ESP',
          birthday: '',
          gender: 'm',
        }}
        validationSchema={userValidation}
        onSubmit={onSubmit}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
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
            <Box
              flexDirection={'row'}
              justifyContent={'space-between'}
              mx={30}
              alignItems={'center'}>
              <SelectInput
                label={'Nationality'}
                items={[
                  {label: 'Ecuadorian', value: 'EC'},
                  {label: 'Spanish', value: 'ES'},
                  {label: 'Colombian', value: 'COL'},
                ]}
                value={values.nationality}
                onChange={handleChange('nationality')}
                hasError={'nationality' in errors}
                errorMesage={errors.nationality}
              />
              <DateInput
                value={values.birthday}
                onChange={handleChange('birthday')}
                hasError={'birthday' in errors}
                errorMessage={errors.birthday}
                label="Birthday"
              />
            </Box>

            <VStack px={30} mt={5} mb={5}>
              <GenderInput
                label={'Gender'}
                value={values.gender}
                onChange={handleChange('gender')}
                hasError={'gender' in errors}
                errorMessage={errors.gender}
              />
            </VStack>

            <ButtonBig
              name="NEXT"
              onPress={() => console.log(values, 'VALUES')}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default PersonalInformation;
