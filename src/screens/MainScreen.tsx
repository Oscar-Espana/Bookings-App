import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {typography} from '../theme/typography';
import Icon from 'react-native-vector-icons/Ionicons';
import CardCheckInOut from '../components/CardCheckInOut';
import {palette} from '../theme/palette';
import CardReservePriceTotal from '../components/CardReservePriceTotal';
import ButtonBig from '../components/ButtonBig';
import {TouchableOpacity} from 'react-native';

const MainScreen = () => {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/header_purple.png')}
        style={{flex: 1, height: 306}}
        resizeMode="cover">
        <View style={styles.header}>
          <View>
            <Text style={typography.heading2}>HOLA JOHN</Text>
            <Text style={typography.greet}>Buenos dias</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.circle}>
              <Icon name="notifications-outline" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{...typography.heading2, fontSize: 24}}>
            Tu reserva en curso
          </Text>
          <Text style={styles.line}>____________________</Text>
        </View>
        <ScrollView>
          <CardCheckInOut />
          <CardReservePriceTotal />
          <ButtonBig />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#282827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 67,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 28,
  },
  line: {
    color: '#8B8B8B',
  },
});

export default MainScreen;
