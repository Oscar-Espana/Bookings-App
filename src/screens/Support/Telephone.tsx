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
                number: '11285695',
              },
            ]}
          />
          <TelephoneItem
            icon={'bug'}
            name={'Bomberos'}
            data={[
              {
                name: 'Bomberos',
                number: '11289859',
              },
            ]}
          />
          <TelephoneItem
            icon={'bug'}
            name={'Hospitales'}
            data={[
              {
                name: 'Hospital 1',
                number: '87451854',
              },
              {
                name: 'Hospital 2',
                number: '91187958',
              },
              {
                name: 'Hospital 3',
                number: '91111988',
              },
            ]}
          />
          <TelephoneItem
            name={'Mi host'}
            data={[
              {
                name: 'Pedrito Zaruma',
                number: '98512963',
              },
            ]}
          />
        </VStack>
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default Telephone;
