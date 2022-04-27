import {useNavigation} from '@react-navigation/native';
import React from 'react';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';

const Documentation = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Documentacion'}
        onPress={() => navigation.goBack()}
      />
    </BackgroundwithGradient>
  );
};

export default Documentation;
