import {Box, Text} from 'native-base';
import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';

interface Props {
  arrivalDays: number;
}

const BackgroundHome = ({arrivalDays}: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/images/header_purple.png')}
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
          {arrivalDays > 0 && (
            <Text color={palette.primary} fontFamily={'Analogue'} fontSize={18}>
              Just {arrivalDays} days left for your arrival
            </Text>
          )}
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
  );
};

export default BackgroundHome;
