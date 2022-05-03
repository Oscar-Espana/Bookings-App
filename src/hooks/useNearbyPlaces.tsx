import React from 'react';
import {useLocation} from './useLocation';

const useNearbyPlaces = () => {
  const {userLocation} = useLocation();
  const [places, setPlaces] = React.useState([]);
  const hola = 'hola';
  const latitude = userLocation.latitude;
  const longitude = userLocation.longitude;
  let radMetter = 2 * 100;

  const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    latitude +
    ',' +
    longitude +
    '&radius=' +
    radMetter +
    '&key=' +
    'AIzaSyDc9rBjIfJHbn0AZDo-zqdAg3foGyK7n8Y';

  console.log(url);
  /*  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setPlaces(data.results);
      console.log(data.results, 'DATA.RESULTS');
    })
    .catch(error => {
      console.log(error);
    }); */

  return hola;
};

export default useNearbyPlaces;
