import {Box, Text} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';
import {IReservations} from '../../interfaces/IReservations';
import CheckInOut from './CheckInOut';

interface Props {
  StayInfo: IReservations;
}

const StayCard = ({StayInfo}: Props) => {
  return (
    <Box
      flex={1}
      mx={28}
      borderWidth={1}
      borderColor={palette.neutral}
      borderRadius={20}
      mb={30}>
      <Box
        borderBottomWidth={1}
        borderBottomColor={'#8B8B8B'}
        padding={14}
        justifyContent={'center'}>
        <Box
          flexDirection={'row'}
          alignContent={'center'}
          alignItems={'center'}>
          <Icon name="location" size={14} color={'#F9B586'} />
          <Text
            style={{
              ...typography.pricesFont,
              fontSize: 12,
              color: palette.neutral,
              marginLeft: 6,
              lineHeight: 24,
            }}>
            {StayInfo.location}
          </Text>
        </Box>

        <Text
          style={{
            ...typography.pricesFont,
            lineHeight: 29,
            fontSize: 24,
          }}>
          {StayInfo.name}
        </Text>
        <Text
          style={{
            ...typography.pricesFont,
            fontSize: 14,
            color: palette.neutral,
            lineHeight: 24,
          }}>
          {StayInfo.street}
        </Text>
      </Box>

      <Box
        borderBottomWidth={1}
        borderBottomColor={'#8B8B8B'}
        flexDirection={'row'}
        padding={14}
        justifyContent={'space-around'}>
        <Box style={styles.totalDays}>
          <Text style={typography.nightsFont}> 3</Text>
          <Text style={typography.nightsFont}> Noches</Text>
        </Box>
        <CheckInOut type={'CHECK IN'} date={StayInfo.dateStart} />
        <CheckInOut type={'CHECK OUT'} date={StayInfo.dateEnd} />
      </Box>
      <>
        <Box padding={14}>
          <Text style={typography.body1Bold}>Numero de reserva</Text>
          <Text style={{color: palette.neutral, fontSize: 12}}>
            {StayInfo.reservationNumber}
          </Text>
        </Box>
      </>
    </Box>
  );
};

const styles = StyleSheet.create({
  totalDays: {
    width: 90,
    height: 90,
    borderRadius: 16,
    backgroundColor: palette.secondary,
    justifyContent: 'center',
  },

  prices: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  totalDetails: {
    borderBottomWidth: 1,
    borderBottomColor: '#8B8B8B',
    flexDirection: 'row',
    padding: 8,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 14,
    borderTopWidth: 1,
    borderColor: palette.neutral,
  },
  serviceType: {
    padding: 18,
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 14,
  },
});

export default StayCard;
