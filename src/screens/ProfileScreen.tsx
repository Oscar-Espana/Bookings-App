import React from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import {Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {typography} from '../theme/typography';
import {palette} from '../theme/palette';
import {Box, Center, VStack, Text} from 'native-base';
import TitleWithIcon from '../components/NativeBase/TitleWithIcon';
import ListItem from '../components/NativeBase/ListItem';

const ProfileScreen = () => {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/user_profile.png')}
        style={{
          height: 288,
          flex: 1,
        }}
        resizeMode="cover">
        <TitleWithIcon title="PROFILE" />
      </ImageBackground>
      <VStack bgColor={palette.background} flex={2} space={5} py={8}>
        <ListItem name="Datos personales" />
        <ListItem name="Datos de reserva" />
        <ListItem name="Terminos y condiciones" />
        <ListItem name="Aviso Legal" />
        <ListItem name="Cerrar sesión" />
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 67,
    marginHorizontal: 28,
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
    marginLeft: 22,
    padding: 10,
  },
  line: {
    color: '#8B8B8B',
  },
});

export default ProfileScreen;
