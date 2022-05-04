import {Box} from 'native-base';
import React, {useEffect} from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import {TabView} from 'react-native-tab-view';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import {TabBarOptions} from '../../components/NativeBase/TabBarOptions';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import TitleWithIcon from '../../components/NativeBase/TitleWithIcon';
import {PermissionsContext} from '../../context/PermissionsContext';
import {IRouteTab} from '../../interfaces/IRouteTab';
import ComunityPlans from './Scenes/ComunityPlans';
import {InterestPoints} from './Scenes/InterestPoints';
import {Services} from './Scenes/Services';

const initialLayout = {
  width: Dimensions.get('window').width,
};

const Explore_screen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<IRouteTab[]>([
    {
      key: 'first',
      title: 'Puntos de interes',
    },
    {
      key: 'second',
      title: 'Servicios',
    },
    {
      key: 'third',
      title: 'Planes de la comunidad',
    },
  ]);

  const renderScene = ({route}: {route: IRouteTab}) => {
    switch (route.key) {
      case 'first':
        return <InterestPoints />;
      case 'second':
        return <Services />;
      case 'third':
        return <ComunityPlans />;
    }
  };

  return (
    <BackgroundwithGradient>
      <TitleWithIcon title="EXPLORA" />

      <Box flex={2}>
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
      </Box>
    </BackgroundwithGradient>
  );
};

export default Explore_screen;
