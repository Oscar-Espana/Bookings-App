import {Box, Icon, VStack} from 'native-base';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';
import {typography} from '../../theme/typography';

interface Props {
  data: any;
}

const PaymentsCard = () => {
  return (
    <VStack
      space={11}
      mb={10}
      pt={4}
      borderColor={palette.neutral}
      borderWidth={1}
      rounded={16}
      mx={28}>
      <Box
        _text={{color: palette.primary}}
        flexDirection={'row'}
        justifyContent={'space-between'}
        mx={15}>
        Servicio de Limpieza
        <Text style={typography.body1Bold}>60.00$</Text>
      </Box>
      <Box
        _text={{color: palette.primary}}
        flexDirection={'row'}
        justifyContent={'space-between'}
        mx={15}>
        Servicio de transporte
        <Text style={typography.body1Bold}>160.00$</Text>
      </Box>
      <Box
        _text={{color: palette.primary}}
        flexDirection={'row'}
        justifyContent={'space-between'}
        mx={15}>
        Servicio de lavado
        <Text style={typography.body1Bold}>60.00$</Text>
      </Box>
      <Box style={styles.total}>
        <Text style={{...typography.body1, color: '#F7F4EB', marginRight: 30}}>
          Total
        </Text>
        <Text style={{...typography.body1Bold, color: '#F7F4EB'}}>128,00$</Text>
      </Box>
    </VStack>
  );
};

const styles = StyleSheet.create({
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 14,
    borderTopWidth: 1,
    borderColor: palette.neutral,
  },
});
export default PaymentsCard;
