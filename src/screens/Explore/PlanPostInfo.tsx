import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithCustomImage';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import plan_only from '../../assets/images/planservices/plan_only.png';
import {Box, ScrollView} from 'native-base';
import SectionTitle from '../../components/NativeBase/SectionTitle';
import StayCard from '../../components/NativeBase/StayCard';
import GuestCard from '../../components/NativeBase/GuestCard';
import TextSection from '../../components/NativeBase/TextSection';
import MoreDropdown from '../../components/NativeBase/MoreDropdown';
import ButtonBig from '../../components/NativeBase/ButtonBig';

const PlanPostInfo = ({route, navigation}: any) => {
  /* const navigation = useNavigation(); */
  const data = route.params;

  const invitados = data.guests;

  return (
    <BackgroundwithGradient source={plan_only}>
      <TitleCentered title="Plan" onPress={() => navigation.goBack()} />
      <ScrollView flex={1}>
        <StayCard StayInfo={data} />
        <SectionTitle title="Invitados" />
        <GuestCard data={invitados} />
        <TextSection>
          Hi everyone! This evening at 8:30pm we are our Home Clubers will have
          the chance to get to know each other at the Irish pub on Castellana
          62.
        </TextSection>
        <MoreDropdown />
        <Box py={5} mx={5}>
          <ButtonBig name="NEXT" />
        </Box>
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default PlanPostInfo;
