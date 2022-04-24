import {Box, Image, ScrollView} from 'native-base';
import React from 'react';
import {palette} from '../../theme/palette';
import ActionItem from './ActionItem';

import User from '../../assets/icons/home/User.png';
import Clock from '../../assets/icons/home/clock.png';
import wallet from '../../assets/icons/home/wallet.png';
import file from '../../assets/icons/home/file-pdf.png';

const RequiredActions = () => {
  const Actions = {
    contracts: false,
    guestDetails: false,
    payments: false,
    travelInfo: false,
  };

  const [selectedActions, setSelectedActions] = React.useState(Actions);

  return (
    <Box mb={5}>
      <Box px={20} pb={4} flexDirection={'row'}>
        <Box
          w={58}
          h={58}
          ml={-12}
          mr={4}
          rounded={50}
          borderColor={'white'}
          borderWidth={1}
          justifyContent={'center'}
          alignItems={'center'}
          _text={{
            color: 'white',
            fontSize: 25,
            fontFamily: 'Analogue',
          }}>
          {String(
            Object.keys(selectedActions).filter(key => selectedActions[key])
              .length,
          )}
        </Box>
        <Box _text={{color: palette.gray}}>
          To do before my arrival. Please provide the following information
          before your check in.
        </Box>
      </Box>
      <Box flexDirection={'row'} justifyContent={'space-evenly'}>
        <ActionItem
          icon={file}
          name={'CONTRACTS'}
          selected={selectedActions.contracts}
          onPress={() =>
            setSelectedActions({
              ...selectedActions,
              contracts: !selectedActions.contracts,
            })
          }
        />
        <ActionItem
          icon={User}
          name={'GUEST DETAILS'}
          selected={selectedActions.guestDetails}
          onPress={() =>
            setSelectedActions({
              ...selectedActions,
              guestDetails: !selectedActions.guestDetails,
            })
          }
        />
        <ActionItem
          icon={wallet}
          name={'PAYMENTS'}
          selected={selectedActions.payments}
          onPress={() =>
            setSelectedActions({
              ...selectedActions,
              payments: !selectedActions.payments,
            })
          }
        />
        <ActionItem
          icon={Clock}
          name={'TRAVEL INFO'}
          selected={selectedActions.travelInfo}
          onPress={() =>
            setSelectedActions({
              ...selectedActions,
              travelInfo: !selectedActions.travelInfo,
            })
          }
        />
      </Box>
    </Box>
  );
};

export default RequiredActions;
