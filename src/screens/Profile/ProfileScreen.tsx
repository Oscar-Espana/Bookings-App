import React from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';
import {Box, Center, VStack, Text, Image} from 'native-base';
import TitleWithIcon from '../../components/NativeBase/TitleWithIcon';
import ListItem from '../../components/NativeBase/ListItem';

import profile_pic from '../../assets/images/profilePicture/profile_pic.png';
import user_profile from '../../assets/images/user_profile.png';

import {useNavigation} from '@react-navigation/native';
import BackgroundwithCustomImage from '../../components/NativeBase/BackgroundwithCustomImage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithCustomImage source={user_profile}>
      <TitleWithIcon title="PROFILE" />

      <Box flexDirection={'row'} mx={28} alignItems="center">
        <Box
          w={90}
          h={90}
          justifyContent="center"
          alignItems="center"
          borderColor={palette.secondary}
          borderWidth={2}
          rounded={70}>
          <Image source={profile_pic} w={74} h={74} alt="ppic" />
        </Box>
        <Box mx={8}>
          <Text style={styles.name}>Melissa Meryem</Text>
          <Text style={styles.subtitle}>Editar perfil </Text>
        </Box>
      </Box>

      <VStack flex={2} space={5} py={8}>
        <ListItem
          name="Signature"
          onPress={() => navigation.navigate('Signature')}
        />
        <ListItem name="Datos personales" />
        <ListItem name="Datos de reserva" />
        <ListItem name="Terminos y condiciones" />
        <ListItem name="Aviso Legal" />
        <ListItem name="Cerrar sesión" color={palette.secondary} />
      </VStack>
    </BackgroundwithCustomImage>
  );
};

const styles = StyleSheet.create({
  name: {
    color: palette.primary,
    fontFamily: 'Quentin',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
  },
  subtitle: {
    color: palette.secondary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
});

export default ProfileScreen;
