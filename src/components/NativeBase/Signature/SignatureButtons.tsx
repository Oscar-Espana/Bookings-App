import {Box} from 'native-base';
import React from 'react';
import ButtonBig from '../ButtonBig';

interface Props {
  handleClear: () => void;
  handleConfirm: () => void;
}

const SignatureButtons = ({handleClear, handleConfirm}: Props) => {
  return (
    <Box flexDirection={'row'} justifyContent={'space-between'} mt={2}>
      <Box w={154}>
        <ButtonBig name={'CLEAR'} onPress={handleClear} />
      </Box>
      <Box w={154}>
        <ButtonBig name={'NEXT'} onPress={handleConfirm} />
      </Box>
    </Box>
  );
};

export default SignatureButtons;
