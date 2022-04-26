import React, {Children} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {reservations} from '../../constants/home/reservations';
import {paletteRGBA} from '../../theme/palette';
import ReservationsCard from './ReservationsCard';
import TitleCentered from './TitleCentered';

const BackgroundwithGradient = ({children}: any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/hey-there.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <LinearGradient
        style={styles.container}
        colors={[paletteRGBA.black(0.8), paletteRGBA.black(0.98)]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
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
