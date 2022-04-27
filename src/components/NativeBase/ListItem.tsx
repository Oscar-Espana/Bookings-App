import React from 'react';
import {Box} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';

interface Props {
  name: string;
  onPress?: () => void;
}

const ListItem = ({name, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        flexDirection={'row'}
        _text={{
          ...typography.body1Bold,
          color: palette.primary,
          fontFamily: 'Trade Gothic LT Std',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: 18,
          lineHeight: 22,
        }}
        justifyContent={'space-between'}
        mx={43}
        alignItems={'center'}>
        {name}
        <Icon name="chevron-forward" size={20} color={palette.secondary} />
      </Box>
    </TouchableOpacity>
  );
};

export default ListItem;
