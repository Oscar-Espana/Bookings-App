import React from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import {Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {typography} from '../theme/typography';
import {palette} from '../theme/palette';
import {Box, Center, VStack, Text} from 'native-base';

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
        <Box style={styles.header}>
          <Box>
            <Text style={{...typography.heading2, lineHeight: 25}}>
              PROFILE
            </Text>
          </Box>
          <TouchableOpacity>
            <Box style={styles.circle}>
              <Icon name="notifications-outline" size={24} color="#fff" />
            </Box>
          </TouchableOpacity>
        </Box>
      </ImageBackground>
      <VStack bgColor={palette.background} flex={2} space={5} px={8} py={8}>
        <Text fontSize={18} color={palette.primary}>
          Datos personales
        </Text>

        <Text fontSize={18} color={palette.primary}>
          Datos de reserva
        </Text>
        <Text fontSize={18} color={palette.primary}>
          Terminos y condiciones
        </Text>
        <Text fontSize={18} color={palette.primary}>
          Aviso Legal
        </Text>
        <Text fontSize={18} color={palette.secondary}>
          Cerrar sesión
        </Text>
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
