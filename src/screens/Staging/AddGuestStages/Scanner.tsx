import {Box, Image, Text} from 'native-base';
import React, {useState, useRef, useEffect} from 'react';
import PDFScanner from '@woonivers/react-native-document-scanner';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageSourcePropType,
} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import TitleCentered from '../../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';

interface imgProps {
  croppedImage: ImageSourcePropType | null;
}

const Scanner = () => {
  const navigation = useNavigation();
  const pdfScannerElement = useRef(null);
  const [data, setData] = useState<imgProps>({
    croppedImage: null,
  });
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function requestCamera() {
      let permissionStatus;
      if (Platform.OS === 'ios') {
        permissionStatus = await request(PERMISSIONS.IOS.CAMERA);
      } else {
        permissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);
      }

      console.log(permissionStatus, 'permissionStatus');
      if (permissionStatus === 'granted') setAllowed(true);
      if (permissionStatus === 'unavailable') setAllowed(true);
    }

    requestCamera();
  }, []);

  function handleOnPressRetry() {
    setData({} as any);
  }
  function handleOnPress() {
    pdfScannerElement.current.capture();
  }

  if (!allowed) {
    console.log('You must accept camera permission');
    return (
      <Box style={styles.permissions}>
        <Text>You must accept camera permission</Text>
      </Box>
    );
  }
  if (data.croppedImage) {
    console.log('datacroppedimage', data);
    return (
      <BackgroundwithGradient>
        <TitleCentered
          title="ID/PASSPORT Ready"
          onPress={() => navigation.goBack()}
        />
        <Box flex={1}>
          <Image
            source={{uri: data.croppedImage}}
            style={styles.preview}
            alt={'croppped image'}
          />
        </Box>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
          <ButtonBig onPress={handleOnPressRetry} name={'RETRY'} />
          <ButtonBig onPress={handleOnPressRetry} name={'NEXT'} />
        </Box>
      </BackgroundwithGradient>
    );
  }

  if (!data) {
    console.log(data, 'DATA');
    return (
      <BackgroundwithGradient>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>Scan</Text>
        </TouchableOpacity>
      </BackgroundwithGradient>
    );
  }

  return (
    <BackgroundwithGradient>
      <TitleCentered title="Scanning" onPress={() => navigation.goBack()} />
      <Box flex={1}>
        <PDFScanner
          ref={pdfScannerElement}
          style={styles.scanner}
          onPictureTaken={setData}
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          quality={0.5}
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
        />
      </Box>
      <Box flexDirection={'row'} justifyContent={'center'}>
        <ButtonBig onPress={handleOnPress} name={'CANCEL'} />
        <ButtonBig onPress={handleOnPress} name={'SCAN'} />
      </Box>
    </BackgroundwithGradient>
  );
};

const styles = StyleSheet.create({
  scanner: {
    flex: 2,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 32,
  },
  buttonText: {
    backgroundColor: 'rgba(245, 252, 255, 0.7)',
    fontSize: 32,
  },
  preview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  permissions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Scanner;
