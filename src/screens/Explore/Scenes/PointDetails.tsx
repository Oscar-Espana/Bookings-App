import {Text, Box} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import Heading from '../../../components/NativeBase/Heading';
import TextSection from '../../../components/NativeBase/TextSection';

const PointDetails = ({route}) => {
  const {name, price, latitude, longitude} = route.params;
  const navigation = useNavigation();
  console.log(route.params);
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'PUNTO DE INTERES'}
        onPress={() => navigation.goBack()}
      />
      <Box flex={1}>
        <Heading title={name} />
        <TextSection>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </TextSection>
        <Text color={'white'} fontSize={25} mx={30}>
          {price}
        </Text>
      </Box>
    </BackgroundwithGradient>
  );
};

export default PointDetails;
