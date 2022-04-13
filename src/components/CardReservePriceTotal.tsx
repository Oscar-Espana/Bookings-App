import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../theme/palette';
import {typography} from '../theme/typography';

const CardReservePriceTotal = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.aparmentInfo}>
          <View style={{flexDirection: 'row', alignContent: 'center'}}>
            <Icon name="location" size={14} color={'#F9B586'} />
            <Text
              style={{
                ...typography.pricesFont,
                fontSize: 12,
                color: palette.neutral,
                marginBottom: 5,
              }}>
              BARCELONA
            </Text>
          </View>

          <Text
            style={{...typography.pricesFont, fontSize: 24, marginBottom: 5}}>
            Royalt Apartment
          </Text>
          <Text
            style={{
              ...typography.pricesFont,
              fontSize: 14,
              color: palette.neutral,
            }}>
            Carrer de Pallars, 171, 08005
          </Text>
        </View>

        <View style={styles.totalDetails}>
          <View style={styles.totalDays}>
            <Text> 3 </Text>
            <Text> Noches </Text>
          </View>

          <View style={styles.prices}>
            <View style={styles.totalPrice}>
              <Text style={{...typography.pricesFont, color: palette.neutral}}>
                Adultos
              </Text>
              <Text style={{...typography.pricesFont, color: 'white'}}>
                {' '}
                x3{' '}
              </Text>
              <Text style={{...typography.pricesFont, color: 'white'}}>
                0,00$
              </Text>
            </View>
            <View style={styles.totalPrice}>
              <Text style={{...typography.pricesFont, color: palette.neutral}}>
                Niños
              </Text>
              <Text style={{...typography.pricesFont, color: 'white'}}>
                {' '}
                x3{' '}
              </Text>
              <Text style={{...typography.pricesFont, color: 'white'}}>
                0,00$
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.total}>
          <Text style={typography.pricesFont}> Total</Text>
          <Text style={{...typography.pricesFont, color: 'white'}}>
            {' '}
            0,00${' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 20,
    marginBottom: 30,
    marginHorizontal: 28,
  },
  totalDays: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: palette.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aparmentInfo: {
    borderBottomWidth: 1,
    borderBottomColor: '#8B8B8B',
    padding: 14,
    justifyContent: 'center',
  },
  prices: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalDetails: {
    borderBottomWidth: 1,
    borderBottomColor: '#8B8B8B',
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'space-between',
  },
  totalPrice: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  total: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 14,
  },
});

export default CardReservePriceTotal;
