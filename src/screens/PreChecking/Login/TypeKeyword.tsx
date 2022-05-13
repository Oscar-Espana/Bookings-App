import {Box, Input} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import Heading from '../../../components/NativeBase/Heading';
import TextSection from '../../../components/NativeBase/TextSection';
import {useNavigation} from '@react-navigation/native';

const TypeKeyword = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Box style={{flex: 1, justifyContent: 'center'}}>
        <Heading title="TYPE THE KEYWORD" />
        <TextSection>
          On the email you got with the link to download this app, we gave you a
          keyword to type in order to a access your reservation.
        </TextSection>

        <Box mx={30}>
          <Input h={50} rounded={10} />
        </Box>
      </Box>
      <ButtonBig name={'NEXT'} onPress={() => navigation.navigate('Login')} />
    </BackgroundwithGradient>
  );
};

export default TypeKeyword;
