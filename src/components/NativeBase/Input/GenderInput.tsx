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

  return (
    <Box>
      <Text style={styles.title}>{label}</Text>

      <Box flexDirection={'row'} justifyContent={'space-between'} pt={18}>
        <TouchableOpacity>
          <Box
            w={62}
            h={62}
            bgColor={palette.secondary}
            rounded={50}
            justifyContent={'center'}
            alignItems={'center'}
            _text={{
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 30,
              lineHeight: 36,
              textAlign: 'center',
            }}>
            M
          </Box>
        </TouchableOpacity>

        <TouchableOpacity>
          <Box
            w={62}
            h={62}
            bgColor={palette.secondary}
            rounded={50}
            justifyContent={'center'}
            alignItems={'center'}
            _text={{
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 30,
              lineHeight: 36,
              textAlign: 'center',
            }}>
            F
          </Box>
        </TouchableOpacity>

        <TouchableOpacity>
          <Box
            w={62}
            h={62}
            bgColor={'transparent'}
            rounded={50}
            borderWidth={1}
            borderColor={palette.gray}
            borderStyle={'dashed'}
            justifyContent={'center'}
            alignItems={'center'}
            _text={{
              color: palette.gray,
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 36,
              textAlign: 'center',
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
});

export default GenderInput;
