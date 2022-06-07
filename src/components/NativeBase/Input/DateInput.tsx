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

const DateInput = ({label, value, onChange, mode = 'time'}: Props) => {
  const dateAux = value === '' ? new Date() : new Date(value);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(format(dateAux, 'MM/dd/yyyy'));
  const [time, setTime] = useState(format(dateAux, 'HH:mm'));

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const dateFormatted = format(date, 'MM/dd/yyyy');
    const timeFormatted = format(date, 'HH:mm');
    mode === 'time' ? setTime(timeFormatted) : setDate(dateFormatted);
    //setDate(dateFormatted);
    onChange(dateFormatted);
    hideDatePicker();
  };

  console.log(date);
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
              borderWidth={0}
              value={mode === 'time' ? time : date}
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
