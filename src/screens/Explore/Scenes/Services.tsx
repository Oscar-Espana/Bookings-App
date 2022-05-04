import {useNavigation} from '@react-navigation/native';
import {Text, VStack} from 'native-base';
import React from 'react';
import ListItem from '../../../components/NativeBase/ListItem';

export const Services = () => {
  const navigation = useNavigation();
  return (
    <VStack space={5}>
      <ListItem name="Servicio de limpieza" subtitle="No incluido" />
      <ListItem
        name="Servicio de transporte"
        subtitle="No incluido"
        onPress={() => navigation.navigate('Transport')}
      />
      <ListItem name="Servicio de lavado" subtitle="No incluido" />
    </VStack>
  );
};
