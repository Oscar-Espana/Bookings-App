import {Box, Image, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import ButtonBig from '../../components/NativeBase/ButtonBig';
import ListItem from '../../components/NativeBase/ListItem';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {TouchableOpacity} from 'react-native';

interface Props {}

const Contract = ({route, navigation}: any) => {
  const data = route.params;

  return (
    <BackgroundwithGradient>
      <TitleCentered
        title="SIGN CONTRACT"
        onPress={() => navigation.goBack()}
      />
      <ScrollView flex={1}>
        <VStack space={30}>
          <ListItem name={'Contract name'} subtitle={'Contract Accomodation'} />
          <ListItem name={'Status'} subtitle={'Pending'} />
          <ListItem
            name={'Propiedad'}
            subtitle={'https://es-l.airbnb.com/rooms/...'}
          />
        </VStack>

        <Box margin={30}>
          <TouchableOpacity>
            <Box w={'100%'} borderWidth={1} borderColor={palette.neutral} />
            <Box
              flexDirection={'row'}
              padding={26}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <Image
                source={require('../../assets/icons/pdf-icon.png')}
                alt="pdf-sign"
              />
              <Text
                color={palette.secondary}
                style={{
                  fontFamily: 'Trade Gothic LT Std',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 24,
                  textAlign: 'center',
                }}>
                READ CONTRACT
              </Text>
              <Icon
                name="chevron-forward"
                size={28}
                color={palette.secondary}
              />
            </Box>
            <Box w={'100%'} borderWidth={1} borderColor={palette.neutral} />
          </TouchableOpacity>
        </Box>

        <Text
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            fontFamily: 'Trade Gothic LT Std',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 14,
            color: palette.primary,
            lineHeight: 17,
          }}>
          Sign contract
        </Text>

        <Box bg={'white'} mx={30}>
          <Image source={{uri: data}} alt="signature" w={319} h={120} />
        </Box>

        <ButtonBig name={'SEND CONTRACT'} />
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default Contract;
