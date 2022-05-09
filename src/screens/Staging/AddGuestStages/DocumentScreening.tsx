import {Box} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextInputC from '../../../components/NativeBase/TextInputC';
import TextSection from '../../../components/NativeBase/TextSection';

const DocumentScreening = ({onPress}: {onPress: () => void}) => {
  return (
    <Box flex={5}>
      <SectionTitle title="Identify Document" />
      <TextSection>
        For security reasons we check manualy all the identifications. In order
        to do that, we need you to upload a picture of you ID document and a
        selfie to compare with you ID.
      </TextSection>
      <TextInputC title={'Document type'} />
      <TextInputC title={'Document number'} />
      <TextInputC title={'Expedition date'} />
      <ButtonBig name={'NEXT'} onPress={onPress} />
    </Box>
  );
};

export default DocumentScreening;
