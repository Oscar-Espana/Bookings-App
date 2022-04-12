import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CheckInOut from './CheckInOut';

const CardCheckInOut = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/reserva.png')}
        style={styles.image}
      />
      <View style={styles.checkinout}>
        <CheckInOut type="CHECK IN" date="02/SEP/2021" />
        <CheckInOut type="CHECK OUT" date="04/OCT/2022" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  image: {
    borderRadius: 20,
  },
  checkinout: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    left: 50,
  },
});

export default CardCheckInOut;
