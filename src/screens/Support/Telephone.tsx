import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';

const Telephone = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Telefonos de interes'}
        onPress={() => navigation.goBack()}
      />
    </BackgroundwithGradient>
  );
};

export default Telephone;
