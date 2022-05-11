import {Box, ScrollView, Select, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextSection from '../../../components/NativeBase/TextSection';
import TextInputC from '../../../components/NativeBase/TextInputC';
import SelectInput from '../../../components/NativeBase/SelectInput';
import GenderInput from '../../../components/NativeBase/Input/GenderInput';

interface Props {
  onPress: () => void;
  handleSubmit: () => void;
}

const PersonalInformation = ({onPress, handleSubmit}: Props) => {
  let [service, setService] = React.useState('');
  return (
    <ScrollView flex={1}>
      <SectionTitle title="Personal Information" />
      <TextSection>Make sure the images are clear.</TextSection>

      <VStack px={30}>
        <TextInputC label={'User'} placeholder={'Enter username'} />
        <TextInputC label={'Password'} placeholder={'Enter password'} />
      </VStack>

      <Box flexDirection={'row'} justifyContent={'space-between'} mx={30}>
        <SelectInput label={'Nationality'} />
        <SelectInput label={'Birthday'} />
      </Box>

      <GenderInput label={'Gender'} />

      <ButtonBig name="NEXT" onPress={onPress} />
    </ScrollView>
  );
};

export default PersonalInformation;
