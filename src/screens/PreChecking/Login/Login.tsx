import {Box, Input, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import TextSection from '../../../components/NativeBase/TextSection';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import Heading from '../../../components/NativeBase/Heading';
import TextInputC from '../../../components/NativeBase/TextInputC';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Box style={{flex: 1, justifyContent: 'center'}}>
        <Heading title="TYPE THE KEYWORD" />
        <TextSection>
          Type your email and the password we provided you by email.
        </TextSection>

        <VStack space={4} mx={30}>
          <TextInputC label={'User'} />

          <TextInputC label={'Password'} />
        </VStack>
      </Box>
      <Box mx={30} bottom={10}>
        <ButtonBig
          name={'LOGIN'}
          onPress={() => navigation.navigate('HowWouldYou')}
        />
      </Box>
    </BackgroundwithGradient>
  );
};

export default Login;
