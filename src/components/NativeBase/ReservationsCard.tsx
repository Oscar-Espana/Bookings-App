import {Box, Text, ScrollView, Image, VStack} from 'native-base';
import {convertAbsoluteToRem} from 'native-base/lib/typescript/theme/tools';
import React from 'react';
import {IReservations} from '../../interfaces/IReservations';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';
interface Props {
  data: IReservations[];
}

const ReservationsCard = ({data}: Props) => {
  console.log(data);
  return (
    <ScrollView horizontal padding={5} showsHorizontalScrollIndicator={false}>
      {data.map((item: IReservations) => (
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
              borderColor={palette.primary}>
              <Text
                fontSize={16}
                lineHeight={24}
                fontWeight={'700'}
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
            w={190}
            h={73}
            alignSelf={'center'}
            bottom={2}
            rounded={16}
            position={'absolute'}
            backgroundColor="white">
            <Box flexDirection={'row'}>
              <Icon name="location" size={24} color={palette.secondary} />
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
