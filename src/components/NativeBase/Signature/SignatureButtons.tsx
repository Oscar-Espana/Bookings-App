import {Box, HStack} from 'native-base';
import React from 'react';
import ButtonBig from '../ButtonBig';

interface Props {
  handleClear: () => void;
  handleConfirm: () => void;
}

const SignatureButtons = ({handleClear, handleConfirm}: Props) => {
  return (
    <HStack
      justifyContent={'space-between'}
      width={'100%'}
      paddingY={8}
      space={5}>
      <ButtonBig onPress={handleClear} name={'CLEAR'} />
      <ButtonBig onPress={handleConfirm} name={'NEXT'} />
    </HStack>
  );
};

export default SignatureButtons;
