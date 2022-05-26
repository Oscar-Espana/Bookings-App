import {Box, VStack} from 'native-base';
import React from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import {paletteRGBA} from '../../../theme/palette';
import {typography} from '../../../theme/typography';
import {useNavigation} from '@react-navigation/native';

const HeyThere = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/images/hey-there.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <LinearGradient
        style={styles.container}
        colors={[paletteRGBA.black(0), paletteRGBA.black()]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={typography.heading1}>Hey There!</Text>
        <Text style={typography.body2}>
          Do You have already an account? Or is the first time you access to
          MyBooking App? So, you must have receive an email with a code to
          create your account.
        </Text>
        <VStack
          position={'absolute'}
          bottom={10}
          space={4}
          w={'100%'}
          alignSelf={'center'}>
          <ButtonBig
            name={'I HAVE AN ACCOUNT'}
            color={'white'}
            onPress={() => navigation.navigate('WelcomeScreen')}
          />
          <ButtonBig
            name={'I HAVE A CODE'}
            onPress={() => navigation.navigate('TypeYourCode')}
          />
        </VStack>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
});

export default HeyThere;
