import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import apartment from '../../assets/video/apartment1.mp4';
import ButtonBig from '../../components/NativeBase/ButtonBig';
import {palette} from '../../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const BeginVideo = () => {
  return (
    <>
      <Video
        source={apartment}
        muted={true}
        style={styles.backgroundVideo}
        repeat={true}
        resizeMode={'cover'}
        rate={1.5}
        ignoreSilentSwitch={'obey'}
      />

      <Box flex={1}>
        <Box
          w={88}
          position="absolute"
          alignSelf={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          mt={height / 2.5}
          h={88}
          rounded={50}
          bgColor={'rgba(255,255,255,0.2)'}>
          <Icon name="play" size={25} color={palette.white} />
        </Box>

        <Box position={'absolute'} bottom={0} alignSelf={'center'} w={'100%'}>
          <Text style={styles.check}>Check out what is coming for you!</Text>

          <ButtonBig name="BEGIN" />
        </Box>
      </Box>
    </>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: -25,
    left: 0,

    alignItems: 'stretch',
    bottom: 25,
    right: 0,
  },
  check: {
    fontFamily: 'Quentin',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 48,

    textAlign: 'center',
    color: '#F7F4EB',
  },
});

export default BeginVideo;
