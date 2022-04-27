import {useNavigation} from '@react-navigation/native';
import React from 'react';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import ListItem from '../../components/NativeBase/ListItem';
import {Box, VStack} from 'native-base';

const Documentation = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Box flex={1}>
        <TitleCentered
          title={'Documentacion'}
          onPress={() => navigation.goBack()}
        />
        <VStack space={30}>
          <ListItem name={'Pasaporte'} />
          <ListItem name={'DNI'} />
          <ListItem name={'COVID'} />
        </VStack>
      </Box>
    </BackgroundwithGradient>
  );
};

export default Documentation;
