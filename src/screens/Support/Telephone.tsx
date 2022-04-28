import {useNavigation} from '@react-navigation/native';
import {VStack} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TelephoneItem from '../../components/NativeBase/TelephoneItem';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {ScrollView} from 'react-native';

const Telephone = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Telefonos de interes'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <VStack space={4} flex={1}>
          <TelephoneItem
            icon={'bug'}
            name={'Policia'}
            data={[
              {
                name: 'Policia',
                number: '112',
              },
            ]}
          />
          <TelephoneItem
            icon={'bug'}
            name={'Bomberos'}
            data={[
              {
                name: 'Bomberos',
                number: '112',
              },
            ]}
          />
          <TelephoneItem
            icon={'bug'}
            name={'Hospitales'}
            data={[
              {
                name: 'Hospital General de la Provincia de Buenos Aires',
                number: '8745184554',
              },
              {
                name: 'Hospital General de la Provincia de Imbabura',
                number: '911',
              },
            ]}
          />
          <TelephoneItem
            icon={'bug'}
            name={'Mi host'}
            data={[
              {
                name: 'Pedrito Zaruma',
                number: '+593 98512963',
              },
            ]}
          />
        </VStack>
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default Telephone;
