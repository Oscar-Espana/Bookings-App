import {Box, Image} from 'native-base';
import React from 'react';

import {palette} from '../../theme/palette';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  icon: ImageSourcePropType;
  name: string;
  selected: boolean;
  onPress: () => void;
}

const ActionItem = ({icon, name, selected, onPress}: Props) => {
  //const [isSelected, setIsSelected] = React.useState(selected);

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        _text={{
          color: palette.primary,
          fontSize: 11,
          fontFamily: 'Trade Gothic LT Std Extended',
        }}
        justifyContent={'center'}
        alignItems={'center'}>
        <Box
          w={70}
          h={70}
          bg={palette.background}
          rounded={16}
          justifyContent={'center'}
          alignItems={'center'}
          shadow={4}
          style={
            selected ? {borderColor: palette.secondary, borderWidth: 1} : {}
          }>
          <Box position={'absolute'} top={-8} right={-15}>
            {selected ? (
              <Icon
                name="checkmark-circle"
                size={30}
                color={palette.secondary}
              />
            ) : (
              <Icon name="time" size={30} color={palette.primary} />
            )}
          </Box>

          <Image source={icon} alt="icon" />
        </Box>
        {name}
      </Box>
    </TouchableOpacity>
  );
};

export default ActionItem;
