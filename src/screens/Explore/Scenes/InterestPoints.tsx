import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {IRouteTab} from '../../../interfaces/IRouteTab';
import {Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {TabBarOptions} from '../../../components/NativeBase/TabBarOptions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapstyle} from '../../../constants/mapstyle';
import ListItem from '../../../components/NativeBase/ListItem';

const initialLayout = {
  width: Dimensions.get('window').width,
};

export const InterestPoints = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<IRouteTab[]>([
    {
      key: 'first',
      title: 'Gastronomia',
    },
    {
      key: 'second',
      title: 'Eventos',
    },
    {
      key: 'third',
      title: 'Ocio',
    },
    {
      key: 'fourth',
      title: 'Compras',
    },
  ]);

  const renderScene = ({route}: {route: IRouteTab}) => {
    switch (route.key) {
      case 'first':
        return (
          <VStack space={5}>
            <ListItem name="Gastronomia" />
            <ListItem name="Eventos" />
            <ListItem name="Ocio" />
          </VStack>
        );
    }
  };

  return (
    <>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapstyle}
      />
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
    </>
  );
};
