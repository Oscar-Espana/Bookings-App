import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {typography} from '../theme/typography';

interface Props {
  type: 'CHECK IN' | 'CHECK OUT';
  date: string;
}

const CheckInOut = ({type, date}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{...typography.cardFont, fontSize: 10, marginBottom: 5}}>
        {type}
      </Text>
      <Text style={{...typography.cardFont, fontWeight: 'bold'}}>
        {date.substring(0, 2)}
        {date.substring(3, 6)}
      </Text>
      <Text style={typography.cardFont}>{date.substring(7, 11)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20,
    bottom: 10,
    marginRight: 10,
  },
});

export default CheckInOut;
