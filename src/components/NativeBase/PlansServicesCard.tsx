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
  return (
    <ScrollView horizontal padding={5} showsHorizontalScrollIndicator={false}>
      {data.map((item: IPlanServices) => (
        <Box
          key={item.id}
          marginRight={5}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 8,
              height: 8,
            },
            shadowOpacity: 0.51,
            shadowRadius: 10.11,

            elevation: 20,
          }}>
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
            px={3}
            py={1}
            h={113}
            alignSelf={'center'}
            bottom={2}
            rounded={16}
            position={'absolute'}
            backgroundColor="white">
            <Text
              fontSize={10}
              lineHeight={24}
              fontWeight={'400'}
              color={palette.gray}>
              {item.type}
            </Text>
            <Text
              fontFamily={'Trade Gothic LT Std'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={16}
              lineHeight={19}
              color={palette.black}>
              {item.name}
            </Text>
            <Text
              fontFamily={'Trade Gothic LT Std'}
              fontStyle={'normal'}
              fontWeight={400}
              fontSize={10}
              alignItems={'center'}
              lineHeight={14}>
              {item.description}
            </Text>
          </VStack>
        </Box>
      ))}
    </ScrollView>
  );
};

export default PlansServicesCard;
