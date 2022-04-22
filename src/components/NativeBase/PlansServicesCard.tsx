import {Box, Text, ScrollView, Image, VStack} from 'native-base';

import React from 'react';
import {IReservations} from '../../interfaces/IReservations';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {IPlanServices} from '../../interfaces/IPlanServices';
interface Props {
  data: IPlanServices[];
}

const PlansServicesCard = ({data}: Props) => {
  console.log(data);
  return (
    <ScrollView horizontal padding={5} showsHorizontalScrollIndicator={false}>
      {data.map((item: IPlanServices) => (
        <Box key={item.id} marginRight={10}>
          <Image
            source={item.img}
            w={210}
            h={288}
            alt={'reservation'}
            rounded={16}
          />
          <Box
            flexDirection={'row'}
            position={'absolute'}
            alignItems={'center'}
            w={'100%'}
            top={1}
            justifyContent={'space-around'}>
            <Box
              borderRadius={16}
              padding={1}
              borderWidth={3}
              borderColor={palette.primary}></Box>
          </Box>

          <VStack
            w={190}
            h={73}
            alignSelf={'center'}
            bottom={2}
            rounded={16}
            position={'absolute'}
            backgroundColor="white">
            <Text>{item.type}</Text>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </VStack>
        </Box>
      ))}
    </ScrollView>
  );
};

export default PlansServicesCard;
