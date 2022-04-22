import {Text, Box, Image, ScrollView} from 'native-base';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {ITimeline} from '../../interfaces/ITimeline';
import {palette} from '../../theme/palette';

interface Props {
  data: ITimeline[];
}

const Timeline = ({data}: Props) => {
  console.log(data);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      padding={2}
      ml={5}>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Icon name="chevron-back-sharp" size={20} color={'white'} />
        {data.map((item: ITimeline) => (
          <Box key={item.id}>
            <Image
              source={item.img}
              rounded={100}
              opacity={0.1}
              w={552}
              h={108}
              ml={5}
              alt={'reservation'}
            />

            <Box position={'absolute'} left={'10%'} top={'20%'}>
              <Box flexDirection={'row'}>
                <Icon
                  name="checkmark-circle"
                  size={22}
                  color={palette.secondary}
                />
                <Text ml={2} color={'white'}>
                  {item.hour}
                </Text>
              </Box>
              <Text ml={8} color={'white'}>
                Estas en el barrio de {item.location}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

export default Timeline;
