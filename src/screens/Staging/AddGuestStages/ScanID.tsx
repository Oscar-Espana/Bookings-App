import {Box, Text} from 'native-base';
import React, {useRef, useState, useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextSection from '../../../components/NativeBase/TextSection';
import ScanIcon from '../../../assets/icons/Scan';
import {palette} from '../../../theme/palette';
import {TouchableOpacity, StyleSheet, Platform, Image} from 'react-native';

import PDFScanner from '@woonivers/react-native-document-scanner';
import {useNavigation} from '@react-navigation/native';

const ScanID = ({onPress}: {onPress: () => void}) => {
  const navigation = useNavigation();
  return (
    <Box flex={1} justifyContent={'space-between'}>
      <Box>
        <SectionTitle title="Scan ID / Passport" withLine={false} />
        <TextSection>You should see the code code (MRZ) IS.</TextSection>
        <Box alignItems={'center'}>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            w={200}
            h={200}
            mt={24}
            rounded={100}
            borderWidth={1}
            borderColor={palette.secondary}
            backgroundColor={'rgba(187, 187, 187, 0.1)'}>
            <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
              <ScanIcon color={palette.secondary} />
              <Text
                mt={5}
                color={palette.secondary}
                fontFamily={'Trade Gothic LT Std'}
                fontStyle="normal"
                fontWeight="400"
                fontSize={15}
                lineHeight={18}
                alignSelf={'center'}>
                Scan
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>

      <Box p={30} bottom={0} position={'absolute'}>
        <ButtonBig name="NEXT" onPress={onPress} />
      </Box>
    </Box>
  );
};

export default ScanID;
