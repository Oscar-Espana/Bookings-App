import React from 'react';
import {Box, ScrollView, Text} from 'native-base';
import {ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {typography} from '../theme/typography';
import {palette} from '../theme/palette';
import CardCheckInOut from '../components/NativeBase/CardCheckInOut';
import ButtonBig from '../components/NativeBase/ButtonBig';
import CardReservePriceTotal from '../components/NativeBase/CardReservePriceTotal';

const MainScreenNB = () => {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/header_purple.png')}
        style={{flex: 1, height: 306}}
        resizeMode="cover">
        <Box
          flexDirection={'row'}
          mt={67}
          mx={28}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Box>
            <Text color={palette.primary} fontFamily={'Analogue'} fontSize={30}>
              HOLA JOHN
            </Text>
            <Text fontFamily={'Quentin'} fontSize={24} color={palette.primary}>
              Buenos dias
            </Text>
          </Box>
          <TouchableOpacity>
            <Box
              width={44}
              height={44}
              borderRadius={50}
              borderWidth={1}
              justifyContent={'center'}
              alignItems={'center'}
              borderColor={palette.primary}>
              <Icon name="notifications-outline" size={24} color="#fff" />
            </Box>
          </TouchableOpacity>
        </Box>
      </ImageBackground>

      <Box flex={2} bgColor={palette.background}>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          marginLeft={22}
          padding={2}>
          <Text style={typography.heading3}>Tu reserva en curso</Text>
          <Text color={'white'}>______________________</Text>
        </Box>
        <ScrollView>
          <CardCheckInOut />
          <CardReservePriceTotal />
          <ButtonBig />
        </ScrollView>
      </Box>
    </>
  );
};

export default MainScreenNB;
