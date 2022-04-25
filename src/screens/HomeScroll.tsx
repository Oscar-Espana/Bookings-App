import React from 'react';
import BackgroundHome from '../components/NativeBase/BackgroundHome';
import CardReservePriceTotal from '../components/NativeBase/CardReservePriceTotal';
import {Box, Pressable, ScrollView, View} from 'native-base';
import {palette} from '../theme/palette';
import SectionTitle from '../components/NativeBase/SectionTitle';
import Icon from 'react-native-vector-icons/Ionicons';
import {Animated, Easing, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SliderButton from '../components/NativeBase/SliderButton';

const HomeScroll = () => {
  const navigation = useNavigation();

  return (
    <>
      <BackgroundHome arrivalDays={0} />
      <Box flex={2} bgColor={palette.background}>
        <ScrollView>
          <Box>
            <SliderButton />
          </Box>

          <SectionTitle title={'Tu reserva en curso'} />
          <TouchableOpacity onPress={() => navigation.navigate('Reserves')}>
            <Box
              flexDirection={'row'}
              position={'absolute'}
              right={5}
              top={-35}>
              <Box mr={-5}>
                <Icon
                  name={'chevron-forward'}
                  color={palette.secondary}
                  size={28}
                />
              </Box>
              <Box>
                <Icon
                  name={'chevron-forward'}
                  color={palette.secondary}
                  size={28}
                />
              </Box>
            </Box>
          </TouchableOpacity>

          <CardReservePriceTotal />
        </ScrollView>
      </Box>
    </>
  );
};

export default HomeScroll;
