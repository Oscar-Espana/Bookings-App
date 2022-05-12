import {useNavigation} from '@react-navigation/native';
import {Box} from 'native-base';
import React, {useRef, useState} from 'react';
import {SignatureViewRef} from 'react-native-signature-canvas';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import SignatureButtons from '../../../components/NativeBase/Signature/SignatureButtons';
import SignaturePad from '../../../components/NativeBase/Signature/SignaturePad';

const DocumentSign = ({onPress}: {onPress: () => void}) => {
  const navigation = useNavigation();

  const ref = useRef<SignatureViewRef>(null);
  const [signature, setSign] = useState(null);

  const handleOK = (signature: any) => {
    setSign(signature);
    navigation.navigate('GrantAccessEmail');
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    ref.current?.clearSignature();
  };

  const handleConfirm = () => {
    console.log('end');
    ref.current?.readSignature();
  };

  return (
    <Box flex={1}>
      <SectionTitle title={'Document Sign'} />
      <Box p={6}>
        <SignaturePad
          ref={ref}
          navigation={navigation}
          handleOK={handleOK}
          handleEmpty={handleEmpty}
        />
        <SignatureButtons
          handleClear={handleClear}
          handleConfirm={handleConfirm}
        />
      </Box>
    </Box>
  );
};

export default DocumentSign;
