import {Box} from 'native-base';
import React, {Children} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {reservations} from '../../constants/home/reservations';
import {paletteRGBA} from '../../theme/palette';
import ReservationsCard from './ReservationsCard';
import TitleCentered from './TitleCentered';

const BackgroundwithGradient = ({children, source}: any) => {
  return (
    <ImageBackground source={source} style={{flex: 1}} resizeMode="cover">
      <LinearGradient
        style={styles.container}
        colors={[paletteRGBA.background(0.5), paletteRGBA.background()]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.5}}>
        {children}
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

export default BackgroundwithGradient;
