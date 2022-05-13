import {Box, Input, ScrollView, VStack} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import TextSection from '../../../components/NativeBase/TextSection';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import Heading from '../../../components/NativeBase/Heading';
import TextInputC from '../../../components/NativeBase/TextInputC';
import {useNavigation} from '@react-navigation/native';
import SelectInput from '../../../components/NativeBase/SelectInput';
import {SafeAreaView} from 'react-native';

const HowWouldYou = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <SafeAreaView>
        <ScrollView mt={10}>
          <Heading title="HOW WOULD YOU LIKE TO LOG IN NEXT TIME?" />
          <TextSection>
            Type your email and the password you would like to use to log in on
            the app from now on. We will send you to this email address all the
            information related to you reservation.
          </TextSection>

          <VStack space={4} mx={30}>
            <TextInputC label={'User'} />

            <TextInputC label={'Password'} />

            <TextInputC label={'Repeat Password'} />
          </VStack>

          <TextSection>
            In whic of the following languages would you like us to communicate
            with you?
          </TextSection>

          <VStack mx={30}>
            <SelectInput
              label={'Language'}
              items={[
                {label: 'English', value: 'en'},
                {label: 'Spanish', value: 'es'},
              ]}
            />
          </VStack>
        </ScrollView>
        <ButtonBig
          name={'LOGIN'}
          onPress={() => navigation.navigate('RequiredActions')}
        />
      </SafeAreaView>
    </BackgroundwithGradient>
  );
};

export default HowWouldYou;
