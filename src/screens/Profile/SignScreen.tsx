import React, {useRef, useState} from 'react';
import SignatureScreen from 'react-native-signature-canvas';
import Signature from 'react-native-signature-canvas';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import {Box, HStack, ScrollView, Text} from 'native-base';
import {palette} from '../../theme/palette';
import ButtonBig from '../../components/NativeBase/ButtonBig';

const SignScreen = () => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const [signature, setSign] = useState(null);

  const handleOK = signature => {
    setSign(signature);
    navigation.navigate('Contract', signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log('end');
    ref.current.readSignature();
  };

  return (
    <BackgroundwithGradient>
      <TitleCentered title="Signature" onPress={() => navigation.goBack()} />

      <Box padding={6} flex={1}>
        <Text
          mt={-5}
          mb={3}
          style={{fontSize: 14, fontWeight: '400', color: '#8B8B8B'}}>
          Sign with inside of the delimited area.
        </Text>
        <Box w={'100%'} h={'80%'} rounded={100}>
          <SignatureScreen
            ref={ref}
            onOK={handleOK}
            onEmpty={handleEmpty}
            clearText="CLEAR"
            confirmText="SAVE"
            webStyle={style}
          />
        </Box>

        <Box flexDirection={'row'} justifyContent={'space-between'} mt={3}>
          <Box w={160}>
            <ButtonBig name={'CLEAR'} onPress={handleClear} />
          </Box>
          <Box w={160}>
            <ButtonBig name={'NEXT'} onPress={handleConfirm} />
          </Box>
        </Box>
      </Box>
    </BackgroundwithGradient>
  );
};
const style = `.m-signature-pad--body canvas {
  
}
.m-signature-pad  {
  height: 438px; 
}
  .m-signature-pad--footer {
    display: none;
    } 
}`;

export default SignScreen;
