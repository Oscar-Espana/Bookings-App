import {useNavigation} from '@react-navigation/native';
import {Box, ScrollView, VStack} from 'native-base';
import React from 'react';
import TextSection from '../../../components/NativeBase/TextSection';
import TitleCentered from '../../../components/NativeBase/TitleCentered';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import SelectInput from '../../../components/NativeBase/SelectInput';

import ButtonBig from '../../../components/NativeBase/ButtonBig';

import {Formik} from 'formik';
import {userValidation, travelSchema} from '../../../lib/validationScheme';
import DateInput from '../../../components/NativeBase/Input/DateInput';

const TravelInformation = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title="Travel Information"
        onPress={() => navigation.goBack()}
      />
      <ScrollView flex={1}>
        <TextSection>
          In order to be ready for your arrival and provide you the best
          experience, we need to know following details.
        </TextSection>

        <Formik
          initialValues={{
            checkingTime: '',
            checkingTime2: '',
            arrivalTransport: '',
          }}
          onSubmit={values => {
            console.log(values);
            navigation.goBack();
          }}
          validationSchema={travelSchema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <Box mx={30}>
                <SelectInput
                  onChange={handleChange('arrivalTransport')}
                  value={values.arrivalTransport}
                  label="Arrival transport"
                  items={[
                    {label: 'Private transport', value: 'private'},
                    {label: 'Public transport', value: 'public'},
                    {label: 'No transport', value: 'no'},
                  ]}
                />
              </Box>
              <VStack mx={8}>
                <DateInput
                  mode={'time'}
                  onChange={handleChange('checkingTime')}
                  value={values.checkingTime}
                  hasError={'checkingTime' in errors}
                  label={'Estimated checking time'}
                />
                <DateInput
                  mode={'time'}
                  value={values.checkingTime2}
                  hasError={'checkingTime2' in errors}
                  onChange={handleChange('checkingTime2')}
                  label={'Estimated checking time'}
                />
              </VStack>

              <Box mx={30} position={'absolute'} width={'85%'} bottom={-250}>
                <ButtonBig name="SAVE" onPress={handleSubmit} />
              </Box>
            </>
          )}
        </Formik>
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default TravelInformation;
