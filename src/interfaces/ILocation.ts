export interface Location {
    latitude: number;
    longitude: number;
    altitude?: number;
    timestamp?: number; //Milliseconds since Unix epoch
    accuracy?: number;
    altitudeAccuracy?: number;
    speed?: number;
  }
  