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

      <HStack justifyContent={'space-between'}>
        <CardScanButtons label={'Front'} icon={frontCard} />
        <CardScanButtons label={'Back'} icon={backCard} />
      </HStack>

      <ButtonBig name={'NEXT'} onPress={onPress} />
    </ScrollView>
  );
};

export default DocumentScreening;
