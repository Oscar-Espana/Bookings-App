import {Box, Image, Input, Text} from 'native-base';
import React, {useState} from 'react';

import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps,
} from 'react-native-modal-datetime-picker';

import format from 'date-fns/format';

import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import {palette} from '../../../theme/palette';

interface Props {
  onChange: (value: string) => void;
  value: string;
  mode: 'date' | 'datetime' | 'time';
  label: string;
  hasError: boolean;
  errorMessage?: string | undefined;
}

const DateInput = ({label, value, onChange, mode = 'date'}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(format(new Date(), 'MM/dd/yyyy'));

  const [time, setTime] = useState(format(new Date(), ''));

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(format(date, 'MM/dd/yyyy'));
    hideDatePicker();
  };

  console.log(date);
  console.log(value, 'value');

  return (
    <Box my={3} minWidth={'150'}>
      <Text style={styles.title}>{label}</Text>
      <Box
        height={51}
        mt={1}
        borderWidth={1}
        flexDirection={'row'}
        borderRadius={10}
        borderColor={palette.gray}>
        <Box justifyContent={'center'} mx={15}>
          <Image
            alt={'cal'}
            source={require('../../../assets/icons/calendar-icon.png')}
            w={18}
            h={18}
          />
        </Box>
        <Box flex={1} w={300} justifyContent={'center'}>
          <TouchableOpacity onPress={showDatePicker} activeOpacity={1}>
            <Input
              editable={false}
              placeholder={'00:00'}
              h={50}
              onChangeText={onChange}
              value={date}
              color={palette.primary}
              isReadOnly
              //value={date.toDateString()}
              onPressIn={showDatePicker}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={mode}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    marginVertical: 1,
    lineHeight: 17,
  },
});

export default DateInput;
