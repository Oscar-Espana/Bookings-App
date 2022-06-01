import React, {useContext, useEffect, useRef} from 'react';
import {Dimensions, Platform, View} from 'react-native';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {Location} from '../interfaces/ILocation';
import {useLocation} from '../hooks/useLocation';

import {mapstyle} from '../constants/mapstyle';
import {palette} from '../theme/palette';
import Fab from './Fab';
import {PermissionsContext} from '../context/PermissionsContext';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LoadingScreen from '../screens/NotUsed/LoadingScreen';
import {Box} from 'native-base';

interface Props {
  markers?: Location[] & {price?: number} & {name?: string};
  coords?: Location;
  polyline?: Location[];
  showUserLocation?: boolean;
  isMarker?: boolean;
  zoom?: number;
}

export const Map = ({
  markers,
  coords,
  polyline,

  showUserLocation = true,
  zoom = 0.009,
}: Props) => {
  const navigation = useNavigation();
  let {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = zoom;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const {permissions, askLocationPermission} =
    React.useContext(PermissionsContext);

  const {
    hasLocation,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  useFocusEffect(() => {
    askLocationPermission();
  });

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        provider={PROVIDER_GOOGLE}
        /* mapPadding={{top: 0, right: 0, bottom: 350, left: 0}} */
        style={{flex: 1}}
        customMapStyle={mapstyle}
        loadingEnabled
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        onTouchStart={() => (following.current = false)}>
        {polyline && (
          <Polyline
            coordinates={polyline!}
            strokeColor="black"
            strokeWidth={5}
            lineJoin="round"
            strokeColors={[
              '#7F0000',
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
          />
        )}
        <Marker coordinate={userLocation}>
          <Icon name="location" size={40} color={palette.secondary} />
        </Marker>

        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              onPress={() => {
                following.current = false;
                mapViewRef.current?.animateCamera({
                  center: {
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  },
                });
                /* console.warn(marker.name, 'pressed'); */
                navigation.navigate('PointDetails', marker);
              }}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              <Box
                bgColor={'white'}
                p={2}
                rounded={13}
                _text={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {marker.price}
              </Box>
              {/* <Icon name="cafe" size={40} color={'green'} /> */}
            </Marker>
          ))}
      </MapView>

      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{
          position: 'absolute',
        }}
      />
    </>
  );
};
