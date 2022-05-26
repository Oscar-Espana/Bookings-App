import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';

const SizeConverter = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Conversor de tallas'}
        onPress={() => navigation.goBack()}
      />
    </BackgroundwithGradient>
  );
};

export default SizeConverter;
