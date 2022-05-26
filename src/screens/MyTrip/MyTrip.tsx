import {
  Box,
  Center,
  StatusBar,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React from 'react';
import {Dimensions, Pressable, Animated} from 'react-native';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import TitleWithIcon from '../../components/NativeBase/TitleWithIcon';
import {TabView} from 'react-native-tab-view';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/MyTripNavigator';
import {IRouteTab} from '../../interfaces/IRouteTab';
import {TabBarOptions} from '../../components/NativeBase/TabBarOptions';
import {YourCity} from './Scenes/YourCity';
import {Manual} from './Scenes/Manual';
import BackgroundwithCustomImage from '../../components/NativeBase/BackgroundwithCustomImage';
import madrid from '../../assets/images/cities/madrid2.png';

interface Props extends StackScreenProps<RootStackParamList, 'MyTrip'> {}

const initialLayout = {
  width: Dimensions.get('window').width,
};

const MyTrip = ({navigation}: Props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<IRouteTab[]>([
    {
      key: 'first',
      title: 'Mi ciudad',
    },
    {
      key: 'second',
      title: 'Manual de supervivencia',
    },
  ]);

  const renderScene = ({route}: {route: IRouteTab}) => {
    switch (route.key) {
      case 'first':
        return <YourCity />;
      case 'second':
        return <Manual navigation={navigation} />;
    }
  };

  return (
    <BackgroundwithCustomImage source={madrid}>
      <TitleWithIcon title={'Mi viaje'} />

      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={e => (
          <TabBarOptions
            {...e}
            indexTab={index}
            onIndexChange={indexTab => setIndex(indexTab)}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </BackgroundwithCustomImage>
  );
};

export default MyTrip;
