import {Box, Image, ScrollView} from 'native-base';
import React from 'react';
import {palette} from '../../theme/palette';
import ActionItem from './ActionItem';

import User from '../../assets/icons/home/User.png';
import Clock from '../../assets/icons/home/clock.png';
import wallet from '../../assets/icons/home/wallet.png';
import file from '../../assets/icons/home/file-pdf.png';

const RequiredActions = () => {
  return (
    <Box mb={5}>
      <Box mt={-8} ml={'25%'} mb={27} _text={{color: palette.gray}}>
        To do before my arrival. Please provide the following information before
        your check in.
      </Box>
      <Box flexDirection={'row'} justifyContent={'space-evenly'}>
        <ActionItem icon={file} name={'CONTRACTS'} />
        <ActionItem icon={User} name={'GUEST DETAILS'} />
        <ActionItem icon={wallet} name={'PAYMENTS'} />
        <ActionItem icon={Clock} name={'TRAVEL INFO'} />
      </Box>
    </Box>
  );
};

export default RequiredActions;
