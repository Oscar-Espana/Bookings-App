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
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="location" size={14} color={'#F9B586'} />
            <Text
              style={{
                ...typography.pricesFont,
                fontSize: 12,
                color: palette.neutral,
                marginLeft: 6,
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
              <Text
                style={{
                  ...typography.pricesFont,
                  color: palette.neutral,
                }}>
                Adultos
              </Text>
              <Text
                style={{
                  ...typography.pricesFont,
                  color: 'white',
                  position: 'absolute',
                  left: '49%',
                }}>
                x3
              </Text>
              <Text
                style={{
                  ...typography.pricesFont,
                  color: 'white',
                }}>
                0,00$
              </Text>
            </View>

            <View style={styles.totalPrice}>
              <Text style={{...typography.pricesFont, color: palette.neutral}}>
                Niños
              </Text>
              <Text
                style={{
                  ...typography.pricesFont,
                  color: 'white',

                  position: 'absolute',
                  left: '49%',
                }}>
                x3
              </Text>
              <Text style={{...typography.pricesFont, color: 'white'}}>
                0,00$
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.total}>
          <Text style={{...typography.pricesFont, marginRight: 30}}>Total</Text>
          <Text style={{...typography.pricesFont, color: 'white'}}>0,00$</Text>
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
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  totalDetails: {
    borderBottomWidth: 1,
    borderBottomColor: '#8B8B8B',
    flexDirection: 'row',
    padding: 14,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 14,
  },
});

export default CardReservePriceTotal;
