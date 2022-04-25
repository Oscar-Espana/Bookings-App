import {Box, Text, ScrollView, Image, VStack} from 'native-base';
import {convertAbsoluteToRem} from 'native-base/lib/typescript/theme/tools';
import React from 'react';
import {IReservations} from '../../interfaces/IReservations';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';
interface Props {
  data: IReservations[];
  horizontal: boolean;
}

const ReservationsCard = ({data, horizontal}: Props) => {
  return (
    <ScrollView
      horizontal={horizontal}
      padding={5}
      showsHorizontalScrollIndicator={false}>
      {data.map((item: IReservations) => (
        <Box key={item.id}>
          <Image
            source={item.img}
            w={'100%'}
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
            justifyContent={'space-between'}>
            <Box
              borderRadius={16}
              padding={1}
              borderWidth={3}
              borderColor={palette.primary}>
              <Text
                fontSize={16}
                textAlign={'center'}
                fontStyle={'normal'}
                lineHeight={24}
                fontWeight={'400'}
                color={palette.primary}>
                {item.dateStart}
              </Text>
            </Box>

            {item.status === 'done' ? (
              <Icon
                name="checkmark-circle"
                size={36}
                color={palette.secondary}
              />
            ) : (
              <Icon name="close-circle" size={36} color={'green.500'} />
            )}
          </Box>

          <VStack
            w={'100%'}
            h={73}
            px={3}
            py={1}
            alignSelf={'center'}
            bottom={3}
            rounded={16}
            position={'absolute'}
            backgroundColor="white">
            <Box flexDirection={'row'}>
              <Icon name="location" size={18} color={palette.secondary} />
              <Text
                fontSize={10}
                lineHeight={24}
                color={palette.neutral}
                fontWeight={'400'}>
                {item.location}
              </Text>
            </Box>
            <Text
              fontSize={16}
              lineHeight={19}
              color={palette.black}
              fontStyle={'normal'}
              fontWeight={'700'}
              fontFamily={'Trade Gothic LT Std'}>
              {item.name}
            </Text>
            <Text fontSize={10} lineHeight={24} color={palette.gray}>
              {item.street}
            </Text>
          </VStack>
        </Box>
      ))}
    </ScrollView>
  );
};

export default ReservationsCard;
