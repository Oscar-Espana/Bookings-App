import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../theme/palette';
import {typography} from '../theme/typography';

const CardReservePriceTotal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
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
                lineHeight: 24,
              }}>
              BARCELONA
            </Text>
          </View>

          <Text
            style={{
              ...typography.pricesFont,
              lineHeight: 29,
              fontSize: 24,
            }}>
            Royalt Apartment
          </Text>
          <Text
            style={{
              ...typography.pricesFont,
              fontSize: 14,
              color: palette.neutral,
              lineHeight: 24,
            }}>
            Carrer de Pallars, 171, 08005
          </Text>
        </View>

        <View style={styles.totalDetails}>
          <View style={styles.totalDays}>
            <Text style={typography.nightsFont}> 3</Text>
            <Text style={typography.nightsFont}> Noches</Text>
          </View>

          <View style={styles.prices}>
            <View style={styles.totalPrice}>
              <Text style={typography.body1Bold}>Adultos</Text>
              <Text
                style={{
                  ...typography.body1,
                  position: 'absolute',
                  left: '49%',
                }}>
                x3
              </Text>
              <Text style={typography.body1}>0,00$</Text>
            </View>
            <View style={styles.totalPrice}>
              <Text style={typography.body1Bold}>Niños</Text>
              <Text
                style={{
                  ...typography.body1,
                  position: 'absolute',
                  left: '49%',
                }}>
                x3
              </Text>
              <Text style={typography.body1}>0,00$</Text>
            </View>
          </View>
        </View>

        {isExpanded && (
          <>
            <View
              style={{
                ...styles.totalDetails,
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  ...typography.body1Bold,
                  marginVertical: 20,
                  color: '#F7F4EB',
                }}>
                Servicios
              </Text>

              <View style={styles.serviceType}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{...typography.body1Bold, lineHeight: 22}}>
                    Servicio de limpieza
                  </Text>
                  <Text style={{...typography.body1Bold, lineHeight: 22}}>
                    0.00$
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      ...typography.body2,
                      fontWeight: '400',
                      color: '#8B8B8B',
                      marginVertical: 5,
                    }}>
                    Fecha del servicio
                  </Text>
                  <Text
                    style={{
                      ...typography.body2,
                      color: '#8B8B8B',
                      marginVertical: 0,
                    }}>
                    10 AGO 2021
                  </Text>
                  <Text
                    style={{
                      ...typography.body2,
                      color: '#8B8B8B',
                      marginVertical: 5,
                    }}>
                    Numero de reserva
                  </Text>
                  <Text
                    style={{
                      ...typography.body2,
                      color: '#8B8B8B',
                      marginVertical: 0,
                    }}>
                    #A169-3803537472-414
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.subtotal}>
              <Text
                style={{
                  ...typography.pricesFont,
                  color: palette.neutral,
                  marginRight: 30,
                }}>
                Subtotal servicios
              </Text>
              <Text style={{...typography.pricesFont, color: 'white'}}>
                0,00$
              </Text>
            </View>
          </>
        )}

        <View style={styles.total}>
          <Text
            style={{...typography.body1, color: '#F7F4EB', marginRight: 30}}>
            Total
          </Text>
          <Text style={{...typography.body1Bold, color: '#F7F4EB'}}>0,00$</Text>
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
    padding: 14,
    borderTopWidth: 1,
    borderColor: palette.neutral,
  },
  serviceType: {
    paddingBottom: 18,
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 14,
  },
});

export default CardReservePriceTotal;
