import {Box, Image, ScrollView} from 'native-base';
import React from 'react';
import {palette} from '../../theme/palette';
import ActionItem from './ActionItem';

import User from '../../assets/icons/home/User.png';
import Clock from '../../assets/icons/home/clock.png';
import wallet from '../../assets/icons/home/wallet.png';
import file from '../../assets/icons/home/file-pdf.png';
import {ImageSourcePropType} from 'react-native';

interface Action {
  id: number;
  name: string;
  isSelected: boolean;
  icon: ImageSourcePropType;
}

const Actions: Action[] = [
  {id: 1, name: 'CONTRACTS', isSelected: true, icon: file},
  {id: 2, name: 'GUEST DETAILS', isSelected: false, icon: User},
  {id: 3, name: 'PAYMENTS', isSelected: false, icon: wallet},
  {id: 4, name: 'TRAVEL INFO', isSelected: false, icon: Clock},
];

const RequiredActions = () => {
  const [selectedActions, setSelectedActions] =
    React.useState<Action[]>(Actions);

  const handlePress = (action: Action) => {
    const newActions: Action[] = [...selectedActions];
    const index = newActions.findIndex(item => item.id === action.id);
    newActions[index].isSelected = !newActions[index].isSelected;

    setSelectedActions(newActions);
  };

  const getSelectedActions = (): string => {
    const total = selectedActions.length;
    const selected = selectedActions.filter(item => item.isSelected);
    return `${selected.length} / ${total}`;
  };

  return (
    <Box mb={5}>
      <Box pl={20} pr={12} pb={8} flexDirection={'row'}>
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
          {getSelectedActions()}
        </Box>
        <Box _text={{color: palette.gray}}>
          To do before my arrival. Please provide the following information
          before your check in.
        </Box>
      </Box>
      <Box flexDirection={'row'} justifyContent={'space-evenly'}>
        {selectedActions.map((item: Action) => (
          <ActionItem
            key={item.id}
            icon={item.icon}
            name={item.name}
            selected={item.isSelected}
            onPress={() => handlePress(item)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RequiredActions;
