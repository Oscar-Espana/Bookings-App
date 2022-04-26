import React from 'react';
import {Heading, Box, VStack} from 'native-base';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {IReservations} from '../interfaces/IReservations';
import {RootStackParamList} from '../navigation/StackNavigator';
import TitleCentered from '../components/NativeBase/TitleCentered';
import BackgroundwithGradient from '../components/NativeBase/BackgroundwithGradient';
import CardReservePriceTotal from '../components/NativeBase/CardReservePriceTotal';
import {ScrollView} from 'react-native-gesture-handler';
import SectionTitle from '../components/NativeBase/SectionTitle';
import {palette} from '../theme/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import PlansServicesCard from '../components/NativeBase/PlansServicesCard';
import {planservices} from '../constants/home/planservices';
import GuestCard from '../components/NativeBase/GuestCard';
import PaymentsCard from '../components/NativeBase/PaymentsCard';
import MoreDropdown from '../components/NativeBase/MoreDropdown';
import ContractsList from '../components/NativeBase/ContractsList';
import Tutorials from '../components/NativeBase/Tutorials';

interface Props extends NativeStackNavigationProp<RootStackParamList, 'Stay'> {}

const StayScreen = ({route, navigation}: any) => {
  const {item} = route.params;

  return (
    <Box flex={1} bg={palette.background}>
      {/* <BackgroundwithGradient> */}
      <TitleCentered title={'Estancia'} onPress={() => navigation.goBack()} />
      <ScrollView>
        <CardReservePriceTotal />
        <SectionTitle title={'Servicios Contratados'} />
        <VStack space={11} mb={10}>
          <Box
            _text={{color: palette.primary}}
            flexDirection={'row'}
            justifyContent={'space-between'}
            mx={44}>
            Servicio de Limpieza{' '}
            <Icon name="chevron-forward" size={14} color={'white'} />
          </Box>
          <Box
            _text={{color: palette.primary}}
            flexDirection={'row'}
            justifyContent={'space-between'}
            mx={44}>
            Servicio de transporte{' '}
            <Icon name="chevron-forward" size={14} color={'white'} />
          </Box>
          <Box
            _text={{color: palette.primary}}
            flexDirection={'row'}
            justifyContent={'space-between'}
            mx={44}>
            Servicio de lavado{' '}
            <Icon name="chevron-forward" size={14} color={'white'} />
          </Box>
        </VStack>
        <SectionTitle title={'Planes'} />
        <PlansServicesCard data={planservices} />

        <SectionTitle title={'Contratos'} />
        <ContractsList />

        <SectionTitle title={'Húespedes'} />
        <GuestCard data={item.guests} />
        <SectionTitle title={'Pagos realizadoss'} />
        <PaymentsCard />

        <SectionTitle title={'Reglas de comunidad'} />
        <VStack space={11} mb={10}>
          <Box
            _text={{color: palette.primary}}
            flexDirection={'row'}
            justifyContent={'space-between'}
            mx={44}>
            Politicas de ruido
            <Icon name="chevron-forward" size={14} color={'white'} />
          </Box>
          <Box
            _text={{color: palette.primary}}
            flexDirection={'row'}
            justifyContent={'space-between'}
            mx={44}>
            Entradas y salidas
            <Icon name="chevron-forward" size={14} color={'white'} />
          </Box>
        </VStack>

        <SectionTitle title="Tutoriales" />
        <Tutorials />

        <MoreDropdown />
      </ScrollView>
      {/* </BackgroundwithGradient> */}
    </Box>
  );
};

export default StayScreen;
