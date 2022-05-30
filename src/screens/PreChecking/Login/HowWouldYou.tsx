import {Box, Input, ScrollView, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import TextSection from '../../../components/NativeBase/TextSection';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import Heading from '../../../components/NativeBase/Heading';
import TextInputC from '../../../components/NativeBase/TextInputC';
import {useNavigation} from '@react-navigation/native';
import SelectInput from '../../../components/NativeBase/SelectInput';
import {SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import {loginSchema, registerSchema} from '../../../lib/validationScheme';

const HowWouldYou = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <SafeAreaView>
        <ScrollView mt={10}>
          <Heading title="HOW WOULD YOU LIKE TO LOG IN NEXT TIME?" />
          <TextSection>
            Type your email and the password you would like to use to log in on
            the app from now on. We will send you to this email address all the
            information related to you reservation.
          </TextSection>

          <Formik
            initialValues={{
              user: '',
              password: '',
              password2: '',
              language: '',
            }}
            onSubmit={values => {
              console.log(values);
              navigation.navigate('RequiredActions');
            }}
            validationSchema={registerSchema}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <>
                <VStack space={4} mx={30}>
                  <TextInputC
                    label={'User'}
                    value={values.user}
                    errorMesagge={errors.user}
                    hasError={'user' in errors}
                    onBlur={handleBlur('user')}
                    onChangeText={handleChange('user')}
                  />
                  <TextInputC
                    label={'Repeat Password'}
                    value={values.password}
                    errorMesagge={errors.password}
                    hasError={'password' in errors}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                  <TextInputC
                    label={'Password'}
                    value={values.password2}
                    errorMesagge={errors.password2}
                    hasError={'password2' in errors}
                    onBlur={handleBlur('password2')}
                    onChangeText={handleChange('password2')}
                  />
                </VStack>

                <TextSection>
                  In whic of the following languages would you like us to
                  communicate with you?
                </TextSection>

                <VStack mx={30}>
                  <SelectInput
                    onChange={handleChange('language')}
                    value={values.language}
                    label={'Language'}
                    items={[
                      {label: 'English', value: 'en'},
                      {label: 'Spanish', value: 'es'},
                    ]}
                  />
                </VStack>

                <Box mx={30}>
                  <ButtonBig name={'LOGIN'} onPress={handleSubmit} />
                </Box>
              </>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </BackgroundwithGradient>
  );
};

export default HowWouldYou;
