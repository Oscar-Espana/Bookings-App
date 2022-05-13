import {Box, Image, Text} from 'native-base';
import React from 'react';
import {IGuest} from '../../../../interfaces/IReservations';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../../../theme/palette';

const GuestCard = ({name, lastname, id, img, status}: IGuest) => {
  return (
    <TouchableOpacity>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        py={18}
        alignItems={'center'}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Image source={img} alt={'guest'} w={71} h={71} />
          <Box ml={30}>
            <Text style={styles.name}>
              {name} {lastname}
            </Text>
            <Text style={styles.status}>{status}</Text>
          </Box>
        </Box>

        <Box>
          <Icon name="chevron-forward" color={palette.secondary} size={20} />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Trade Gothic LT Std',
    fontSize: 18,
    color: palette.primary,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  status: {
    fontFamily: 'Trade Gothic LT Std',
    fontSize: 14,
    color: palette.secondary,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
  },
});

export default GuestCard;
