import React from 'react';
import {Box, Divider, HStack, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {ImageSourcePropType} from 'react-native';

interface TelephoneItemProps {
  icon?: string;
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
        {icon ? (
          <Icon name={icon!} color={palette.secondary} size={22} />
        ) : (
          <Box w={22} />
        )}

        <Text color={palette.secondary} ml={3}>
          {name}
        </Text>
      </Box>

      {data.length > 1 ? (
        <HStack ml={8} flexDirection={'column'} space={6}>
          {data.map(item => (
            <Box flexDirection={'row'}>
              <Text width={'60%'} color={'white'}>
                {item.name}
              </Text>

              <Text textAlign={'left'} color={'white'}>
                {item.number}
              </Text>
            </Box>
          ))}
        </HStack>
      ) : (
        <Text textAlign={'left'} color={'white'} ml={8}>
          {data[0].number}
        </Text>
      )}
    </Box>
  );
};

export default TelephoneItem;
