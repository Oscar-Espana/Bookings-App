import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';

const Dictionary = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Diccionario'}
        onPress={() => navigation.goBack()}
      />
    </BackgroundwithGradient>
  );
};

export default Dictionary;
