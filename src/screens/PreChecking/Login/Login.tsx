import {Box, Input, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import TextSection from '../../../components/NativeBase/TextSection';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import Heading from '../../../components/NativeBase/Heading';
import TextInputC from '../../../components/NativeBase/TextInputC';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {userValidation, loginSchema} from '../../../lib/validationScheme';

const Login = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('HowWouldYou');
        }}
        validationSchema={loginSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <Box style={{flex: 1, justifyContent: 'center'}}>
              <Heading title="TYPE THE KEYWORD" />
              <TextSection>
                Type your email and the password we provided you by email.
              </TextSection>

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
                  label={'Password'}
                  value={values.password}
                  errorMesagge={errors.password}
                  hasError={'password' in errors}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
              </VStack>
            </Box>
            <Box p={30} bottom={0} position={'absolute'}>
              <ButtonBig
                name={'LOGIN'}
                /* onPress={() => navigation.navigate('HowWouldYou')} */
                onPress={handleSubmit}
              />
            </Box>
          </>
        )}
      </Formik>
    </BackgroundwithGradient>
  );
};

export default Login;
