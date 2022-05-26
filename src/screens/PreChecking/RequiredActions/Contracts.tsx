import {Box, VStack} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import ContractItem from '../../../components/NativeBase/ContractItem';

const Contracts = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered title="CONTRACTS" onPress={() => navigation.goBack()} />
      <VStack flex={1} space={4}>
        <ContractItem />
        <ContractItem />
      </VStack>
    </BackgroundwithGradient>
  );
};

export default Contracts;
