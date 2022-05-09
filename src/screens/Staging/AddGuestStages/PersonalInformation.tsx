import {Box} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextInputC from '../../../components/NativeBase/TextInputC';
import TextSection from '../../../components/NativeBase/TextSection';

const PersonalInformation = ({onPress}: {onPress: () => void}) => {
  return (
    <Box flex={6}>
      <SectionTitle title="Personal Information" />
      <TextSection>Make sure the images are clear.</TextSection>

      <TextInputC title={'User'} placeholder={'Enter username'} />
      <TextInputC title={'Password'} placeholder={'Enter password'} />
      <Box flexDirection={'row'}>
        <TextInputC title={'Nationality'} />
        <TextInputC title={'Birthday'} />
      </Box>
      <ButtonBig name="NEXT" onPress={onPress} />
    </Box>
  );
};

export default PersonalInformation;
