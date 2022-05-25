import {Box, Text} from 'native-base';
import React from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette, paletteRGBA} from '../../theme/palette';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  arrivalDays: number;
}

const BackgroundHome = ({arrivalDays}: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/images/header_purple.png')}
      style={{flex: 1, height: 306}}
      resizeMode="cover">
      <LinearGradient
        style={styles.container}
        colors={[paletteRGBA.background(0), paletteRGBA.background(0.2)]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Box
          flex={1}
          mt={67}
          flexDirection={'row'}
          mx={28}
          justifyContent={'space-between'}>
          <Box>
            <Text color={palette.primary} fontFamily={'Analogue'} fontSize={30}>
              HOLA JOHN
            </Text>
            <Text fontFamily={'Quentin'} fontSize={24} color={palette.primary}>
              Buenos dias
            </Text>
            {arrivalDays > 0 && (
              <Text
                color={palette.primary}
                fontFamily={'Analogue'}
                fontSize={18}>
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
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
});

export default BackgroundHome;
