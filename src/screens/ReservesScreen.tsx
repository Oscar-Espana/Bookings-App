import {Box, Center, Heading, Text} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReservationsCard from '../components/NativeBase/ReservationsCard';
import {paletteRGBA, palette} from '../theme/palette';
import {typography} from '../theme/typography';
import {reservations} from '../constants/home/reservations';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleCentered from '../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';

const ReservesScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <ImageBackground
        source={require('../assets/images/hey-there.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <LinearGradient
          style={styles.container}
          colors={[paletteRGBA.black(0.6), paletteRGBA.black(1)]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <TitleCentered title="RESERVAS" onPress={() => navigation.goBack()} />
          <ReservationsCard data={reservations} horizontal={false} />
        </LinearGradient>
      </ImageBackground>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
});

export default ReservesScreen;
