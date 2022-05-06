import {Box, Heading, ScrollView, Text} from 'native-base';
import React from 'react';
import {palette} from '../../../theme/palette';
import CardBlack from '../../../components/NativeBase/CardBlack';
import {reservations} from '../../../constants/home/reservations';
import {IReservations} from '../../../interfaces/IReservations';
import Icon from 'react-native-vector-icons/Ionicons';

const ComunityPlans = () => {
  return (
    <ScrollView>
      <SingleTitle title="Planes de la comunidad" icon={'cog'} />

      {reservations.map((item: IReservations, index: number) => {
        return <CardBlack data={item} key={index} />;
      })}

      <SingleTitle title="Post relacionados" />
      {reservations.map((item: IReservations, index: number) => {
        return <CardBlack data={item} key={index} />;
      })}
    </ScrollView>
  );
};

const SingleTitle = ({title, icon}: any) => {
  return (
    <Box flexDirection={'row'} justifyContent="space-between">
      <Text
        fontFamily="Analogue"
        fontStyle="normal"
        fontWeight="400"
        fontSize={24}
        lineHeight={24}
        color={palette.primary}
        mx={28}>
        {title}
      </Text>
      <Box mr={28}>
        <Icon name={icon} size={24} color={palette.secondary} />
      </Box>
    </Box>
  );
};

export default ComunityPlans;
