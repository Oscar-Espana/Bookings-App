import {Text, VStack} from 'native-base';
import React from 'react';
import ListItem from '../../../components/NativeBase/ListItem';

export const Services = () => {
  return (
    <VStack space={5}>
      <ListItem name="Servicio de limpieza" subtitle="No incluido" />
      <ListItem name="Servicio de transporte" subtitle="No incluido" />
      <ListItem name="Servicio de lavado" subtitle="No incluido" />
    </VStack>
  );
};
