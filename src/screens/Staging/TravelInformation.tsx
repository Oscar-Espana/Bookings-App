import {useNavigation} from '@react-navigation/native';
import {Box, ScrollView} from 'native-base';
import React from 'react';
import TextSection from '../../components/NativeBase/TextSection';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import SelectInput from '../../components/NativeBase/SelectInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonBig from '../../components/NativeBase/ButtonBig';
import CustomDatePicker from '../../components/NativeBase/Input/CustomDatePicker';

const TravelInformation = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title="Travel Information"
        onPress={() => navigation.goBack()}
      />
      <ScrollView flex={1}>
        <TextSection>
          In order to be ready for your arrival and provide you the best
          experience, we need to know following details.
        </TextSection>

        <Box mx={30}>
          <SelectInput
            label="Arrival transport"
            items={[
              {label: 'Private transport', value: 'private'},
              {label: 'Public transport', value: 'public'},
              {label: 'No transport', value: 'no'},
            ]}
          />
        </Box>

        {/*  <Box m={30} bgColor={'blue.100'}>
          <DateTimePicker mode="time" value={new Date()} />
        </Box>

        <Box m={30} bgColor={'blue.100'}>
          <DateTimePicker mode="time" value={new Date()} />
        </Box> */}

        <CustomDatePicker mode={'time'} label={'Estimated checking time'} />
        <CustomDatePicker mode={'time'} label={'Estimated checking time'} />

        <ButtonBig
          name="SAVE"
          onPress={() => navigation.navigate('FinishSettings')}
        />
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default TravelInformation;
