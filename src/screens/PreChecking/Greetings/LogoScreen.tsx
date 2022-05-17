import {Box, Image} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import {palette} from '../../../theme/palette';
import TextSection from '../../../components/NativeBase/TextSection';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LogoScreen = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TouchableOpacity onPress={() => navigation.navigate('HeyThere')}>
        <Box
          w={172}
          h={172}
          borderColor={palette.gray}
          borderWidth={1}
          rounded={40}
          mt={40}
          borderStyle={'dashed'}
          alignSelf={'center'}></Box>
      </TouchableOpacity>

      <Box
        flex={1}
        _text={{
          color: palette.white,
          fontSize: 48,
          fontWeight: '400',
          textAlign: 'center',
          fontFamily: 'Quentin',
          fontStyle: 'normal',
          lineHeight: 70,
          marginTop: 20,
        }}>
        Loem Ipsum
      </Box>

      <TextSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TextSection>

      <Box justifyContent={'flex-end'} alignItems={'center'} flex={1}>
        <Image
          alt={'logo'}
          source={require('../../../assets/EpicMondayLogo.png')}
        />
      </Box>
    </BackgroundwithGradient>
  );
};

export default LogoScreen;
