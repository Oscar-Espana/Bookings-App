import {Box, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {palette} from '../../../theme/palette';

interface Props {
  label: string;
}

const GenderInput = ({label}: Props) => {
  const [selectedOption, setIsSelected] = React.useState({
    m: true,
    f: false,
    other: false,
  });

  const onSelect = (option: string) => {
    setIsSelected({
      m: option === 'm',
      f: option === 'f',
      other: option === 'other',
    });
  };

  console.log(selectedOption);

  return (
    <Box>
      <Text style={styles.title}>{label}</Text>

      <Box flexDirection={'row'} justifyContent={'space-between'} pt={18}>
        <TouchableOpacity onPress={() => onSelect('m')}>
          <Box
            w={71}
            h={71}
            style={
              selectedOption.m ? styles.buttonSelected : styles.buttonUnselected
            }
            _text={{
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 30,
              lineHeight: 36,
              textAlign: 'center',
              color: selectedOption.m ? palette.background : palette.neutral,
            }}>
            M
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSelect('f')}>
          <Box
            w={71}
            h={71}
            style={
              selectedOption.f ? styles.buttonSelected : styles.buttonUnselected
            }
            _text={{
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 30,
              lineHeight: 36,
              textAlign: 'center',
              color: selectedOption.f ? palette.background : palette.neutral,
            }}>
            F
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSelect('other')}>
          <Box
            w={71}
            h={71}
            style={
              selectedOption.other
                ? styles.buttonSelected
                : styles.buttonUnselected
            }
            _text={{
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 36,
              textAlign: 'center',
              color: selectedOption.other
                ? palette.background
                : palette.neutral,
            }}>
            OTHER
          </Box>
        </TouchableOpacity>
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
    lineHeight: 17,
  },
  buttonSelected: {
    backgroundColor: palette.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonUnselected: {
    borderColor: palette.gray,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: palette.background,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GenderInput;
