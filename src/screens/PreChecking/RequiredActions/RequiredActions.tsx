import {Box, Input, VStack} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import Heading from '../../../components/NativeBase/Heading';
import TextSection from '../../../components/NativeBase/TextSection';
import {useNavigation} from '@react-navigation/native';
import ActionCard from './components/ActionCard';

const RequiredActions = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Box style={{flex: 1, justifyContent: 'center'}}>
        <Heading title="Required Actions" />
        <TextSection>
          We need you to completed following actions as soon as posible to
          prepare everything for your arrival.
        </TextSection>

        <VStack space={4} mx={30} mt={25}>
          <ActionCard
            title={'Contracts'}
            status={'Completado'}
            icon={'file-pdf'}
            onPress={() => navigation.navigate('Contracts')}
          />
          <ActionCard
            title={'Guest'}
            status={'Completado'}
            icon={'usersMulti'}
            onPress={() => navigation.navigate('Guests')}
          />
          <ActionCard
            title={'Travel'}
            status={'Pendiente'}
            icon={'compassBig'}
            onPress={() => navigation.navigate('Travel')}
          />
        </VStack>
      </Box>
      <ButtonBig
        name={'COMPLETAL PRECHECKING'}
        onPress={() => console.log('Precheking complete')}
      />
    </BackgroundwithGradient>
  );
};

export default RequiredActions;
