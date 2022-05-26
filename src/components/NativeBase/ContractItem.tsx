import React from 'react';
import {Box, Image, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import contract from '../../assets/icons/file-pdf.png';
import {palette} from '../../theme/palette';
import {StyleSheet, TouchableOpacity} from 'react-native';

const ContractItem = () => {
  return (
    <TouchableOpacity>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        mx={30}
        alignItems={'center'}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Image alt={'contract'} source={contract} />
          <Box ml={5}>
            <Text style={styles.title}>Contract.pdf</Text>
            <Text style={styles.subtitle}>Pendiente</Text>
          </Box>
        </Box>

        <Icon name={'chevron-forward'} size={26} color={palette.secondary} />
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: palette.primary,
  },
  subtitle: {
    color: palette.secondary,
  },
});

export default ContractItem;
