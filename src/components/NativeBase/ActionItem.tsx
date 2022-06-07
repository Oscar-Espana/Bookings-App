import {Box, Image} from 'native-base';
import React from 'react';

import {palette} from '../../theme/palette';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  icon: ImageSourcePropType;
  name: string;
  selected: boolean;
  size?: 'small' | 'large';
  onPress?: () => void;
}

const ActionItem = ({icon, name, selected, onPress, size}: Props) => {
  //const [isSelected, setIsSelected] = React.useState(selected);

  const boxSize = size === 'large' ? 120 : 70;
  const iconSize = size === 'large' ? 50 : 30;

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        _text={{
          color: selected ? palette.secondary : palette.primary,
          fontSize: 11,
          top: 4,
          fontFamily: 'Trade Gothic LT Std',
        }}
        justifyContent={'center'}
        alignItems={'center'}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 14,
        }}>
        <Box
          w={boxSize}
          h={boxSize}
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

          <Image source={icon} alt="icon" w={iconSize} h={iconSize} />
        </Box>
        {name}
      </Box>
    </TouchableOpacity>
  );
};

export default ActionItem;
