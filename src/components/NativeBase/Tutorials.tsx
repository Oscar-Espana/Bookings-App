import React from 'react';
import {Box, Image, ScrollView} from 'native-base';
import tutorial from '../../assets/images/tutorials/1.png';

const Tutorials = () => {
  return (
    <ScrollView horizontal padding={8}>
      <Image source={tutorial} alt={'tutorial'} />
    </ScrollView>
  );
};

export default Tutorials;
