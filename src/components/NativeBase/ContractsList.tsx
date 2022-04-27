import React from 'react';
import {Box} from 'native-base';
import ActionItem from './ActionItem';
import file from '../../assets/icons/home/file-pdf.png';

const ContractsList = () => {
  return (
    <Box flexDirection={'row'} justifyContent={'space-around'}>
      <ActionItem
        icon={file}
        name={'Contract'}
        selected={true}
        size={'large'}
      />
      <ActionItem
        icon={file}
        name={'Contract'}
        selected={true}
        size={'large'}
      />
    </Box>
  );
};

export default ContractsList;
