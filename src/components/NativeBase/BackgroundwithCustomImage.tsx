import {Box} from 'native-base';
import React, {Children} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {reservations} from '../../constants/home/reservations';
import {paletteRGBA, palette} from '../../theme/palette';
import ReservationsCard from './ReservationsCard';
import TitleCentered from './TitleCentered';

const BackgroundwithGradient = ({children, source, height = 288}: any) => {
  return (
    <Box bgColor={palette.background} flex={1} position={'relative'}>
      <ImageBackground
        source={source}
        style={{
          flex: 1,
          height: height,
          width: '100%',
          position: 'absolute',
        }}
        resizeMode="cover">
        <LinearGradient
          style={styles.container}
          colors={[paletteRGBA.background(0), paletteRGBA.background(1)]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}></LinearGradient>
      </ImageBackground>
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default BackgroundwithGradient;
