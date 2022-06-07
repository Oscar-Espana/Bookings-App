import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import usercheck from '../../assets/icons/user-check.png';
import {Box, Image, Text} from 'native-base';
import TextSection from '../../components/NativeBase/TextSection';
import ButtonBig from '../../components/NativeBase/ButtonBig';
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';
import {useNavigation} from '@react-navigation/native';

const FinishSettings = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <Box>
        <Box alignItems={'center'}>
          <Image alt="user-check" source={usercheck} />
        </Box>
        <Box my={23}>
          <Text style={styles.title}>Great!</Text>
        </Box>
        <TextSection>
          You are all set! Now this app will be our main point of contact and
          you will find a lot of useful information and features to enjoy your
          stay with us.
        </TextSection>
      </Box>
      <Box bottom={10} mx={30} position={'absolute'} w={'85%'}>
        <ButtonBig
          name="LET'S GO"
          onPress={() => navigation.navigate('BeginVideo')}
        />
      </Box>
    </BackgroundwithGradient>
  );
};

const styles = StyleSheet.create({
  title: {
    color: palette.primary,
    fontFamily: 'Analogue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default FinishSettings;
