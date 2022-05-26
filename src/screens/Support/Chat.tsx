import {Box} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';

const Chat = () => {
  return (
    <BackgroundwithGradient>
      <TitleCentered title={'Chat'} />
      <Box flex={1}></Box>
    </BackgroundwithGradient>
  );
};

export default Chat;
