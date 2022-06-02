import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import {Box, ScrollView, Text, VStack} from 'native-base';
import {palette} from '../../theme/palette';
import NotificationItem from '../../components/NativeBase/NotificationItem';
import userProfile from '../../assets/images/guests/1.png';
import Time from './components/Time';

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title={'Notificaciones'}
        onPress={() => navigation.goBack()}
      />
      <Box flex={1}>
        <ScrollView>
          <Time time={'Hoy'} />
          <VStack space={6} mt={5} px={6}>
            <NotificationItem
              icon={userProfile}
              name={'Mateo Culhane'}
              time={'1h'}
            />
            <NotificationItem
              icon={userProfile}
              name={'Terry Culhane'}
              time={'2h'}
            />
          </VStack>
          <Time time={'Ayer'} />
          <VStack space={6} mt={5} px={6}>
            <NotificationItem
              icon={userProfile}
              name={'Tey Seep'}
              time={'1h'}
            />
            <NotificationItem
              icon={userProfile}
              name={'Terry Culhane'}
              time={'1h'}
            />
            <NotificationItem
              icon={userProfile}
              name={'Terry Isout'}
              time={'1h'}
            />
          </VStack>
        </ScrollView>
      </Box>
    </BackgroundwithGradient>
  );
};

export default Notifications;
