import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import {Box, VStack} from 'native-base';
import ListItem from '../../components/NativeBase/ListItem';

const Dictionary = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Box flex={1}>
        <TitleCentered
          title={'Diccionario'}
          onPress={() => navigation.goBack()}
        />
        <VStack space={30}>
          <ListItem name={'¿Como puedo pedir cerveza?'} />
          <ListItem name={'¿Como puedo pedir delivery?'} />
          <ListItem name={'¿Como puedo pedir un taxi?'} />
        </VStack>
      </Box>
    </BackgroundwithGradient>
  );
};

export default Dictionary;
