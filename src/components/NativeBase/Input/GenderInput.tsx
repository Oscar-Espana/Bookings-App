import {Box, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {palette} from '../../../theme/palette';

interface Props {
  label: string;
}

type optionsType = {
  m: boolean;
  f: boolean;
  other: boolean;
};

const GenderInput = ({label}: Props) => {
  const [selectedOption, setIsSelected] = React.useState<optionsType>({
    m: true,
    f: false,
    other: false,
  });

  return (
    <Box>
      <Text>{label}</Text>

      <Box flexDirection={'row'} justifyContent={'space-between'} px={30}>
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
              fontSize: 28,
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
              fontSize: 28,
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
            bgColor={palette.secondary}
            rounded={50}
            justifyContent={'center'}
            alignItems={'center'}
            _text={{
              fontFamily: 'Trade Gothic LT Std',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 36,
              textAlign: 'center',
            }}>
            Other
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default GenderInput;
