import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';

const FoodSchedule = () => {
  const navigation = useNavigation();

  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Horarios de comida'}
        onPress={() => navigation.goBack()}
      />
    </BackgroundwithGradient>
  );
};

export default FoodSchedule;
