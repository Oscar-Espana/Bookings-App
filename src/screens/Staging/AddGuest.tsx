import {Box, Text} from 'native-base';
import React, {useState} from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import StepIndicator from 'react-native-step-indicator';
import {palette} from '../../theme/palette';
import {StyleSheet} from 'react-native';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import Icon from 'react-native-vector-icons/Ionicons';
import ScanID from './AddGuestStages/ScanID';
import DocumentScreening from './AddGuestStages/DocumentScreening';
import PersonalInformation from './AddGuestStages/PersonalInformation';
import DocumentSign from './AddGuestStages/DocumentSign';

const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: palette.secondary,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: palette.secondary,
  stepStrokeUnFinishedColor: palette.gray,
  separatorFinishedColor: palette.secondary,
  separatorUnFinishedColor: palette.gray,
  stepIndicatorFinishedColor: palette.secondary,
  stepIndicatorUnFinishedColor: palette.gray,
  stepIndicatorCurrentColor: palette.secondary,
};

const AddGuest = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const renderStages = (position: any) => {
    switch (position) {
      case 0:
        return (
          <ScanID onPress={() => setCurrentPosition(currentPosition + 1)} />
        );
      case 1:
        return (
          <PersonalInformation
            onPress={() => setCurrentPosition(currentPosition + 1)}
          />
        );
      case 2:
        return (
          <DocumentScreening
            onPress={() => setCurrentPosition(currentPosition + 1)}
          />
        );
      case 3:
        return (
          <DocumentSign onPress={() => setCurrentPosition(currentPosition)} />
        );
      default:
        return null;
    }
  };

  return (
    <BackgroundwithGradient>
      <TitleCentered
        title="ADD GUEST"
        onPress={() => console.log(currentPosition)}
      />
      <Box flex={1}>
        <StepIndicator
          stepCount={4}
          renderStepIndicator={customRenderStepIndicator}
          customStyles={customStyles}
          currentPosition={currentPosition}
          onPress={position => setCurrentPosition(position)}
        />
      </Box>
      {renderStages(currentPosition)}
    </BackgroundwithGradient>
  );
};

const customRenderStepIndicator = ({stepStatus, position}: any) => {
  console.log(stepStatus, position);

  const styles = StyleSheet.create({
    stepIndicator: {},
  });

  return (
    <Box style={styles.stepIndicator}>
      {stepStatus === 'finished' ? (
        <Box
          width={40}
          height={40}
          bgColor={palette.background}
          justifyContent={'center'}
          alignItems={'center'}>
          <Icon name="checkmark-outline" size={15} color={palette.secondary} />
        </Box>
      ) : null}
    </Box>
  );
};

export default AddGuest;
