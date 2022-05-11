import {Box, Image, Text} from 'native-base';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import {palette} from '../../../theme/palette';

const DateInput = ({label}: {label: string}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  console.log(date.toLocaleString());
  return (
    <Box my={3} mb={10} minWidth={'150'} h={50}>
      <Text style={styles.title}>{label}</Text>
      <Box
        height={60}
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
          <TouchableOpacity onPress={showDatepicker}>
            <DateTimePicker
              style={{
                width: '100%',
              }}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

/* 
  _selectedItem={{
    bg: 'blue.100',
  }}
  style={{
    borderColor: 'white',

  }}
 */

const styles = StyleSheet.create({
  title: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
});

export default DateInput;
