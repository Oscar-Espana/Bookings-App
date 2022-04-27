import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';

const NightLeasure = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Ocio Nocturno'}
        onPress={() => navigation.goBack()}
      />
    </BackgroundwithGradient>
  );
};

export default NightLeasure;
