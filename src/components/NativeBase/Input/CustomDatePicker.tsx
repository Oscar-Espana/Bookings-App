import {Box, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {palette} from '../../../theme/palette';

import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps,
} from 'react-native-modal-datetime-picker';

interface Props {
  mode: 'date' | 'datetime' | 'time';
  label: string;
}

const CustomDatePicker = ({mode, label}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('00:00');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.log(date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <Text style={styles.label}>{label}</Text>
      <Box
        style={{
          borderWidth: 1,
          borderColor: palette.gray,

          marginHorizontal: 30,
          borderRadius: 10,
        }}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Input editable={false} placeholder={'00:00'} h={50} />
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: palette.primary,
    marginHorizontal: 30,
    marginTop: 30,
  },
});

export default CustomDatePicker;
