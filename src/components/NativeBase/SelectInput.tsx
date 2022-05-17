import React from 'react';
import {Select, Box, Text, FormControl} from 'native-base';
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

interface Props {
  label: string;
  hasError?: boolean;
  errorMesage?: string | undefined;
  items: Item[];
  onChange: (value: string) => void;
  value: string;
}

type Item = {label: string; value: string};

const SelectInput = ({
  label,
  value,
  hasError,
  errorMesage,
  items,

  onChange,
}: Props) => {
  let [valueAux, setService] = React.useState(value);

  return (
    <Box my={30} minWidth={'150'}>
      <FormControl isRequired isInvalid={hasError}>
        <Text style={styles.title}>{label}</Text>
        <Select
          height={50}
          rounded={10}
          selectedValue={valueAux}
          accessibilityLabel={label}
          placeholder={label}
          color={palette.primary}
          mt={1}
          onValueChange={itemValue => {
            setService(itemValue);
            onChange(itemValue);
          }}>
          {items.map((item, key) => (
            <Select.Item key={key} label={item.label} value={item.value} />
          ))}
        </Select>
        <FormControl.ErrorMessage>{errorMesage}</FormControl.ErrorMessage>
      </FormControl>
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
    lineHeight: 17,
  },
});

export default SelectInput;
