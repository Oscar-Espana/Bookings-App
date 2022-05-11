import {Box, HStack, ScrollView, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import CardScanButtons from '../../../components/NativeBase/Input/CardScanButtons';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import SelectInput from '../../../components/NativeBase/SelectInput';
import TextInputC from '../../../components/NativeBase/TextInputC';
import TextSection from '../../../components/NativeBase/TextSection';

import frontCard from '../../../assets/icons/front-card.png';
import backCard from '../../../assets/icons/back-card.png';
import SelfieScanner from '../../../components/NativeBase/Input/SelfieScanner';
import {Formik} from 'formik';
import DateInput from '../../../components/NativeBase/Input/DateInput';
import {userValidation} from '../../../lib/validationScheme';
import {useNavigation} from '@react-navigation/native';

const DocumentScreening = ({onPress}: {onPress: () => void}) => {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1}>
      <SectionTitle title="Identify Document" />
      <TextSection>
        For security reasons we check manualy all the identifications. In order
        to do that, we need you to upload a picture of you ID document and a
        selfie to compare with you ID.
      </TextSection>

      <Formik
        initialValues={{
          documentNumber: '',
          documentType: '',
          documentExpedition: '',
        }}
        validationSchema={userValidation}
        onSubmit={() => console.log('submited')}>
        {({handleChange, handleBlur, values, errors}) => (
          <VStack mx={30}>
            <SelectInput label={'Document Type'} />
            <TextInputC
              label={'Document number'}
              placeholder={'Enter document number'}
              onChangeText={handleChange('documentNumber')}
              onBlur={handleBlur('documentNumber')}
              value={values.documentNumber}
              errorMesagge={errors.documentNumber}
              hasError={'documentNumber' in errors}
            />
            <DateInput label="Expedition date" />
          </VStack>
        )}
      </Formik>

      <HStack justifyContent={'space-between'} px={30}>
        <CardScanButtons
          label={'Front'}
          icon={frontCard}
          onPress={() => navigation.navigate('Scanner')}
        />
        <CardScanButtons
          label={'Back'}
          icon={backCard}
          onPress={() => navigation.navigate('Scanner')}
        />
      </HStack>

      <Box px={30}>
        <SelfieScanner onPress={() => navigation.navigate('Scanner')} />
      </Box>

      <ButtonBig name={'NEXT'} onPress={onPress} />
    </ScrollView>
  );
};

export default DocumentScreening;
