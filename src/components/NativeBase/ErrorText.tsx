import {Text} from 'native-base';
import React from 'react';

const ErrorText = ({msg}: {msg: string}) => {
  return (
    <Text color={'red.600'} mt={3} fontSize={9}>
      {msg}
    </Text>
  );
};

export default ErrorText;
