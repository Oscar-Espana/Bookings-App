import {Box, Text} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {paletteRGBA} from '../../../theme/palette';
import {typography} from '../../../theme/typography';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/welcome.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <LinearGradient
        style={styles.container}
        colors={[paletteRGBA.black(0), paletteRGBA.black()]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={typography.heading1}>Welcome</Text>
        <Text style={typography.body2}>
          It is always exciting to travel and visit new places! We are very
          happy to have you with us.
        </Text>
        <Text style={typography.body2}>
          We will guide you through a few steps so that you have everything
          ready for your arrival and we will grant you access to all the content
          and services that we have prepared for you.
        </Text>
        <Box position={'absolute'} bottom={10} w={'100%'} alignSelf={'center'}>
          <ButtonBig
            name={'LETS GO'}
            onPress={() => navigation.navigate('TypeKeyword')}
          />
        </Box>
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

export default WelcomeScreen;
