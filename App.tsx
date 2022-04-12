import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, ImageBackground, StyleSheet} from 'react-native';
import {palette, paletteRGBA} from './src/theme/palette';
import {typography} from './src/theme/typography';

const App = () => {
  return (
    <ImageBackground
      source={require('./src/assets/images/hey-there.png')}
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

export default App;
