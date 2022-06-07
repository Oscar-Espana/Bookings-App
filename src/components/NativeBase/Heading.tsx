import {Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

const Heading = ({title}: {title: string}) => {
  return (
    <Text style={styles.heading} mx={30}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Analogue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 31,
    marginVertical: 13,
    letterSpacing: 1.85,
    textTransform: 'uppercase',
    color: palette.primary,
  },
});

export default Heading;
