import {Box, Input, KeyboardAvoidingView} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import Heading from '../../../components/NativeBase/Heading';
import TextSection from '../../../components/NativeBase/TextSection';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import {palette} from '../../../theme/palette';

const TypeKeyword = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <KeyboardAvoidingView
        flex={1}
        justifyContent={'center'}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Heading title="TYPE THE KEYWORD" />
        <TextSection>
          On the email you got with the link to download this app, we gave you a
          keyword to type in order to a access your reservation.
        </TextSection>

        <Box m={30}>
          <Input
            rounded={10}
            _focus={{
              borderColor: palette.primary,
              backgroundColor: 'transparent',
            }}
            color={palette.primary}
            borderColor={palette.gray}
            height={50}
            borderRadius={10}
          />
        </Box>
      </KeyboardAvoidingView>

      <Box p={30} bottom={0} position={'absolute'}>
        <ButtonBig name={'NEXT'} onPress={() => navigation.navigate('Login')} />
      </Box>
    </BackgroundwithGradient>
  );
};

export default TypeKeyword;
