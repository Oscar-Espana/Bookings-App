import {VStack} from 'native-base';
import React from 'react';
import ListItem from '../../../components/NativeBase/ListItem';

export const Manual = ({navigation}: any) => (
  <VStack space={4}>
    <ListItem
      name={'Documentacion'}
      onPress={() => navigation.navigate('Documentation')}
    />
    <ListItem name={'Propinas'} onPress={() => navigation.navigate('Tips')} />
    <ListItem
      name={'Horarios de comida'}
      onPress={() => navigation.navigate('FoodSchedule')}
    />
    <ListItem
      name={'Ocio Nocturno en la ciudad'}
      onPress={() => navigation.navigate('NightLeasure')}
    />
    <ListItem
      name={'Conversor de tallas de ropa'}
      onPress={() => navigation.navigate('SizeConverter')}
    />
    <ListItem
      name={'Medidas Covid en la ciudad'}
      onPress={() => navigation.navigate('CovidMeasures')}
    />
    <ListItem
      name={'Conversor de divisas'}
      onPress={() => navigation.navigate('CurrencyConverter')}
    />
    <ListItem
      name={'Diccionation de frases unicas'}
      onPress={() => navigation.navigate('Dictionary')}
    />
  </VStack>
);
