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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScroll = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView bgColor={palette.background} stickyHeaderIndices={[1]}>
      <BackgroundHome arrivalDays={0} />

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        width={'100%'}
        py={10}
        backgroundColor={palette.background}>
        <SliderButton />
        <TouchableOpacity>
          <View style={styles.circle}>
            <Icon name="notifications-outline" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </Box>

      <SectionTitle title={'Tu reserva en curso'} />
      <TouchableOpacity onPress={() => navigation.navigate('Reserves')}>
        <Box flexDirection={'row'} position={'absolute'} right={5} top={-35}>
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
      <CardReservePriceTotal />
      <CardReservePriceTotal />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScroll;
