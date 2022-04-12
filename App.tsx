import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, ImageBackground} from 'react-native';
import {palette, paletteRGBA} from './src/theme/palette';

const App = () => {
  return (
    <ImageBackground
      source={require('./src/assets/images/hey-there.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 24,
        }}
        colors={[paletteRGBA.black(0), paletteRGBA.black()]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text
          style={{
            color: palette.primary,
            fontFamily: 'Quentin',
            fontSize: 48,
          }}>
          Hey There!
        </Text>
        <Text
          style={{
            color: palette.primary,
            fontFamily: 'Trade Gothic LT Std Regular',
            fontSize: 14,
            lineHeight: 24,
          }}>
          Do You have already an account? Or is the first time you access to
          MyBooking App? So, you must have receive an email with a code to
          create your account.
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default App;
