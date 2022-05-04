import {Box, Heading, ScrollView, Text} from 'native-base';
import React from 'react';
import {palette} from '../../../theme/palette';
import CardBlack from '../../../components/NativeBase/CardBlack';
import {reservations} from '../../../constants/home/reservations';
import {IReservations} from '../../../interfaces/IReservations';

const ComunityPlans = () => {
  return (
    <ScrollView>
      <SingleTitle title="Planes de la comunidad" />

      {reservations.map((item: IReservations, index: number) => {
        return <CardBlack data={item} />;
      })}

      <SingleTitle title="Post relacionados" />
      {reservations.map((item: IReservations, index: number) => {
        return <CardBlack data={item} />;
      })}
    </ScrollView>
  );
};

const SingleTitle = ({title}: any) => {
  return (
    <Text
      fontFamily="Analogue"
      fontStyle="normal"
      fontWeight="400"
      fontSize={24}
      lineHeight={24}
      color={palette.primary}
      px={28}>
      {title}
    </Text>
  );
};

export default ComunityPlans;
