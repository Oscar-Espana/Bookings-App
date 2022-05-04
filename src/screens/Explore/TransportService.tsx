import React from 'react';
import BackgroundwithCustomImage from '../../components/NativeBase/BackgroundwithCustomImage';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import taxi2 from '../../assets/images/taxi2.png';
import {Box, Heading, ScrollView, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {palette} from '../../theme/palette';
import TextSection from '../../components/NativeBase/TextSection';
import ButtonBig from '../../components/NativeBase/ButtonBig';
import ActionItem from '../../components/NativeBase/ActionItem';
import file from '../../assets/icons/home/file-pdf.png';

const TransportService = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithCustomImage source={taxi2}>
      <TitleCentered
        title="Servicios de transporte"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Box
          h={150}
          borderColor={palette.gray}
          borderWidth={1}
          rounded={16}
          padding={4}
          my={4}
          mx={4}>
          <Text mx={11} color={palette.secondary} my={2}>
            Disponibilidad
          </Text>
          <Box flexWrap={'wrap'}>
            <DayItem day="Lu" schedule="8:00 - 18:00" />
            <DayItem day="Ma" schedule="8:00 - 18:00" />
            <DayItem day="Mi" schedule="8:00 - 18:00" />

            <DayItem day="Vi" schedule="8:00 - 18:00" />
            <DayItem day="Sa" schedule="8:00 - 18:00" />
            <DayItem day="Do" schedule="8:00 - 18:00" />
          </Box>
        </Box>
        <TextSection>
          Ponemos a tu disposición un chófer para que se encargue de tu
          transporte del aeropuerto a casa y para cualquier otro desplazamiento
          que necesites durante tu estancia.
        </TextSection>
        <TextSection>
          Nuestros chóferes profesionales te esperarán sujetando un cartel con
          tu nombre, ayudarán con el equipaje, coordinarán tu check-in y se
          ocuparán de que el desplazamiento sea fácil y cómodo.
        </TextSection>
        <TextSection>
          Los precios pueden variar según la solicitud. Dependiendo del número
          de pasajeros y maletas, deberás solicitar un tipo de coche u otro
          (solo ida).
        </TextSection>

        <Heading
          p={8}
          color={palette.primary}
          fontSize={18}
          fontWeight={'700'}
          lineHeight={21.6}>
          Catalogo de servicios adicionales
        </Heading>

        <Box flexDirection={'row'} justifyContent={'space-evenly'}>
          <ActionItem icon={file} selected={true} name={'ES'} />
          <ActionItem icon={file} selected={true} name={'EN'} />
        </Box>

        <DatePicker />
        <ButtonBig />
      </ScrollView>
    </BackgroundwithCustomImage>
  );
};

const DayItem = ({day, schedule}: any) => {
  return (
    <Box flexDirection={'row'} my={1} mx={7}>
      <Text color={'white'}>{day}</Text>
      <Text color={palette.neutral} ml={15}>
        {schedule}
      </Text>
    </Box>
  );
};

const DatePicker = () => {
  return (
    <Box py={6}>
      <Heading
        mx={18}
        py={2}
        color={palette.primary}
        fontSize={18}
        fontWeight={'700'}
        lineHeight={21.6}>
        Selecciona la fecha
      </Heading>

      <Box
        mx={18}
        height={50}
        rounded={10}
        borderColor={palette.neutral}
        borderWidth={1}></Box>
    </Box>
  );
};

export default TransportService;
