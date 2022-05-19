import {Box} from 'native-base';
import React from 'react';
import ButtonBig from '../ButtonBig';

interface Props {
  handleClear: () => void;
  handleConfirm: () => void;
}

const SignatureButtons = ({handleClear, handleConfirm}: Props) => {
  return (
    <Box flexDirection={'row'} justifyContent={'space-between'} w={350}>
      <ButtonBig name={'CLEAR'} onPress={handleClear} />
      <ButtonBig name={'NEXT'} onPress={handleConfirm} />
    </Box>
  );
};

export default SignatureButtons;
