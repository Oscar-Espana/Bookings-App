import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';

const Tips = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered title={'Propinas'} onPress={() => navigation.goBack()} />
    </BackgroundwithGradient>
  );
};

export default Tips;
