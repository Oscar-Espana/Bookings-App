import {Box, ScrollView, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import SelectInput from '../../../components/NativeBase/SelectInput';
import TextInputC from '../../../components/NativeBase/TextInputC';
import TextSection from '../../../components/NativeBase/TextSection';

const DocumentScreening = ({onPress}: {onPress: () => void}) => {
  return (
    <ScrollView flex={1}>
      <SectionTitle title="Identify Document" />
      <TextSection>
        For security reasons we check manualy all the identifications. In order
        to do that, we need you to upload a picture of you ID document and a
        selfie to compare with you ID.
      </TextSection>

      <VStack mx={30}>
        <SelectInput label={'Document Type'} />
        <TextInputC label={'Document number'} />
        <TextInputC label={'Expiration Date'} />
      </VStack>

      <ButtonBig name={'NEXT'} onPress={onPress} />
    </ScrollView>
  );
};

export default DocumentScreening;
