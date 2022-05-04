import React, {useEffect} from 'react';
import {Box, Text, VStack} from 'native-base';
import {IRouteTab} from '../../../interfaces/IRouteTab';
import {Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {TabBarOptions} from '../../../components/NativeBase/TabBarOptions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapstyle} from '../../../constants/mapstyle';
import ListItem from '../../../components/NativeBase/ListItem';
import {Map} from '../../../components/Map';
import {PermissionsContext} from '../../../context/PermissionsContext';
import useNearbyPlaces from '../../../hooks/useNearbyPlaces';

const initialLayout = {
  width: Dimensions.get('window').width,
};

export const InterestPoints = () => {
  const {askLocationPermission, permissions, checkLocationPermission} =
    React.useContext(PermissionsContext);

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

  /*  useEffect(() => {
    checkLocationPermission();
  }, [permissions]);
 */
  return (
    <>
      <Map
        coords={{
          latitude: 0,
          longitude: 0,
        }}
      />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>

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
