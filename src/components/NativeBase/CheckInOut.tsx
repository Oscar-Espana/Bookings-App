import React from 'react';
import {Box, Text} from 'native-base';

import {typography} from '../../theme/typography';

interface Props {
  type: 'CHECK IN' | 'CHECK OUT';
  date: string;
}

const CheckInOut = ({type, date}: Props) => {
  return (
    <Box
      width={90}
      height={90}
      borderRadius={20}
      backgroundColor={'#fff'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Text style={{...typography.cardFont, fontSize: 10, marginBottom: 5}}>
        {type}
      </Text>
      <Text style={{...typography.cardFont, fontWeight: 'bold'}}>
        {date.substring(0, 2)}
        {date.substring(3, 6)}
      </Text>
      <Text style={typography.cardFont}>{date.substring(7, 11)}</Text>
    </Box>
  );
};

export default CheckInOut;
