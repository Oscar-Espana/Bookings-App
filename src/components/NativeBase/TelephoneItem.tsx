import React from 'react';
import {Box, Divider, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';

interface TelephoneItemProps {
  icon: string;
  name: string;
  data: {
    name: string;
    number: string;
  }[];
}

const TelephoneItem = ({icon, name, data}: TelephoneItemProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor={palette.neutral}
      padding={18}
      mx={5}
      rounded={16}>
      <Box flexDirection={'row'}>
        <Icon name={icon} color={palette.secondary} size={22} />
        <Text color={palette.secondary} ml={3}>
          {name}
        </Text>
      </Box>
      {data.map(item => (
        <VStack key={item.name} flexDirection={'row'} space={18} ml={8}>
          <Text width={'60%'} color={'white'}>
            {item.name}
          </Text>

          <Text textAlign={'right'} color={'white'}>
            {item.number}
          </Text>
        </VStack>
      ))}
    </Box>
  );
};

export default TelephoneItem;
