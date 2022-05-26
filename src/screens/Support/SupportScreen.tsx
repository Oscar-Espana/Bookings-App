import {Box, VStack} from 'native-base';
import React from 'react';
import TitleWithIcon from '../../components/NativeBase/TitleWithIcon';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import ListItem from '../../components/NativeBase/ListItem';
import {StackScreenProps} from '@react-navigation/stack';
import BackgroundwithCustomImage from '../../components/NativeBase/BackgroundwithCustomImage';
import tecnician from '../../assets/images/tecnician.png';

export type SupportScreenProps = {
  Chat: any;
  Telephone: any;
  Notifications: any;
};

interface Props extends StackScreenProps<SupportScreenProps> {}

const SupportScreen = ({navigation}: Props) => {
  return (
    <BackgroundwithCustomImage source={tecnician}>
      <TitleWithIcon title={'SOPORTE'} />

      <VStack space={30} flex={1}>
        <ListItem name={'Chat'} onPress={() => navigation.navigate('Chat')} />
        <ListItem
          name={'Contacto del Property Manager'}
          onPress={() => navigation.navigate('Telephone')}
        />
        <ListItem
          name={'Notificaciones'}
          onPress={() => navigation.navigate('Notifications')}
        />
      </VStack>
    </BackgroundwithCustomImage>
  );
};

export default SupportScreen;
