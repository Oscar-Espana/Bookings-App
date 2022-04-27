import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {Box, Text} from 'native-base';
import ItemSchedule from '../../components/NativeBase/ItemSchedule';

const FoodSchedule = () => {
  const navigation = useNavigation();

  return (
    <BackgroundwithGradient>
      <Box flex={1}>
        <TitleCentered
          title={'Horarios de comida'}
          onPress={() => navigation.goBack()}
        />
        <Box _text={{color: 'white'}}>Espana, Madrid</Box>
        <ItemSchedule type={'Desayuno'} time={'7:00AM'} />
        <ItemSchedule type={'Almuerzo'} time={'1:00AM'} />
        <ItemSchedule type={'Cena'} time={'8:00AM'} />
      </Box>
    </BackgroundwithGradient>
  );
};

export default FoodSchedule;
