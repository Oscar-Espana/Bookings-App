import {Box, FormControl, Image, Input, ScrollView, Text} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import usercheck from '../../assets/icons/user-check.png';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {palette} from '../../theme/palette';
import TextSection from '../../components/NativeBase/TextSection';
import {Formik} from 'formik';
import TextInputC from '../../components/NativeBase/TextInputC';
import ButtonBig from '../../components/NativeBase/ButtonBig';
import {userValidation} from '../../lib/validationScheme';

const GrantAccessEmail = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title="GRANT APP ACCESS"
        onPress={() => navigation.goBack()}
      />
      <ScrollView flex={1}>
        <Box alignItems={'center'}>
          <Image alt="user-check" source={usercheck} />
        </Box>
        <Box alignItems={'center'} m={26}>
          <Text style={styles.title}>Congratulations!</Text>
        </Box>
        <TextSection>
          The information of this guest have been successfully submited. If you
          want to provide access to the app to this guest, type the email
          address and we will send the instructions to login on the app after
          the pre-checkin is complete.
        </TextSection>

        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={userValidation}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <Box mx={30}>
                <FormControl isInvalid>
                  <TextInputC
                    label="Email"
                    placeholder="Enter email"
                    errorMesagge={errors.email}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    hasError={'email' in errors}
                  />
                </FormControl>
              </Box>
              <ButtonBig name={'FINISH'} onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('TravelInformation')}>
          <Text style={styles.skip}>Omitir</Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </BackgroundwithGradient>
  );
};

const styles = StyleSheet.create({
  title: {
    color: palette.primary,
    fontFamily: 'Analogue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
  },
  skip: {
    color: palette.secondary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
export default GrantAccessEmail;
