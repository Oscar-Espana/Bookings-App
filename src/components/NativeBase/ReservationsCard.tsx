import {Box, Text, ScrollView, Image, VStack} from 'native-base';
import {convertAbsoluteToRem} from 'native-base/lib/typescript/theme/tools';
import React from 'react';
import {IReservations} from '../../interfaces/IReservations';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';
import {TouchableOpacity} from 'react-native';
interface Props {
  data: IReservations[];
  horizontal: boolean;
  onPress: (item: IReservations) => void;
}

const ReservationsCard = ({data, horizontal, onPress}: Props) => {
  return (
    <ScrollView
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      mt={-10}>
      {data.map((item: IReservations) => (
        <TouchableOpacity key={item.id} onPress={() => onPress(item)}>
          <Box px={4}>
            <Box
              flexDirection={'row'}
              justifyContent="space-between"
              mx={5}
              top={10}
              zIndex={1}>
              <Box
                borderRadius={16}
                padding={1}
                borderWidth={3}
                borderColor={palette.primary}
                _text={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontStyle: 'normal',
                  lineHeight: 24,
                  fontWeight: '400',
                  color: palette.primary,
                }}>
                {item.dateStart}
              </Box>

              <Box
                w={36}
                h={36}
                rounded={50}
                justifyContent={'center'}
                alignContent={'center'}>
                {item.status === 'done' ? (
                  <Icon
                    name="checkmark-circle"
                    size={36}
                    color={palette.secondary}
                  />
                ) : (
                  <Icon name="close-circle" size={36} color={palette.gray} />
                )}
              </Box>
            </Box>

            <Image
              source={item.img}
              w={350}
              h={288}
              alt={'reservation'}
              rounded={16}
            />

            <VStack
              w={'90%'}
              h={93}
              px={3}
              py={1}
              position={'absolute'}
              alignSelf={'center'}
              bottom={3}
              rounded={16}
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
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ReservationsCard;
