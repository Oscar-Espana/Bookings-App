import {Box} from 'native-base';
import React, {useRef, useState} from 'react';
import SignatureScreen, {SignatureViewRef} from 'react-native-signature-canvas';

interface Props {
  navigation: any;
  handleOK: (signature: any) => void;
  handleEmpty: () => void;
}

const SignaturePad = React.forwardRef<SignatureViewRef, Props>((props, ref) => {
  const {navigation, handleOK, handleEmpty} = props;

  return (
    <Box w={'100%'} h={'74%'} rounded={100}>
      <SignatureScreen
        ref={ref}
        onOK={handleOK}
        onEmpty={handleEmpty}
        clearText="CLEAR"
        confirmText="SAVE"
        webStyle={style}
      />
    </Box>
  );
});

const style = `.m-signature-pad--body canvas {
  
}
.m-signature-pad  {
  height: 438px; 
}
  .m-signature-pad--footer {
    display: none;
    } 
}`;

export default SignaturePad;
