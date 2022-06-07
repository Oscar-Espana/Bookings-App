import {
  Box,
  Text,
  ScrollView,
  Image,
  VStack,
  HStack,
  Center,
} from 'native-base';
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
    <ScrollView horizontal={horizontal} showsHorizontalScrollIndicator={false}>
      <HStack space={5} mx={5}>
        {data.map((item: IReservations) => (
          <TouchableOpacity key={item.id} onPress={() => onPress(item)}>
            <Box
              position={'absolute'}
              zIndex={1}
              p={2}
              width={210}
              h={288}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,

                elevation: 16,
              }}>
              <Box flexDirection={'row'} justifyContent="space-between">
                <Box
                  borderRadius={16}
                  borderWidth={3}
                  padding={1}
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
                  w={42}
                  h={42}
                  rounded={50}
                  justifyContent={'center'}
                  alignContent={'center'}>
                  {item.status === 'done' ? (
                    <>
                      <Box
                        position={'absolute'}
                        bgColor={palette.primary}
                        rounded={50}
                        ml={1}
                        w={6}
                        h={6}
                      />
                      <Icon
                        name="checkmark-circle"
                        size={42}
                        color={palette.secondary}
                      />
                    </>
                  ) : (
                    <>
                      <Box
                        position={'absolute'}
                        bgColor={palette.primary}
                        rounded={50}
                        ml={1}
                        w={6}
                        h={6}
                      />
                      <Icon
                        name="close-circle"
                        size={36}
                        color={palette.gray}
                      />
                    </>
                  )}
                </Box>
              </Box>

              <VStack
                px={3}
                pt={1}
                rounded={16}
                backgroundColor="white"
                bottom={-160}>
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
                  letterSpacing={0.6}
                  lineHeight={19}
                  color={palette.black}
                  fontStyle={'normal'}
                  fontWeight={'700'}
                  fontFamily={'Trade Gothic LT Std'}>
                  {item.name}
                </Text>

                <Text
                  fontSize={10}
                  lineHeight={24}
                  fontStyle={'normal'}
                  color={palette.gray}
                  fontWeight={'400'}
                  fontFamily={'Trade Gothic LT Std'}>
                  {item.street}
                </Text>
              </VStack>
            </Box>

            <Image
              source={item.img}
              w={210}
              h={288}
              alt={'reservation'}
              rounded={16}
            />
          </TouchableOpacity>
        ))}
      </HStack>
    </ScrollView>
  );
};

export default ReservationsCard;
