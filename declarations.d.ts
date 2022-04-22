declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
import { ImageSourcePropType} from 'react-native';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.jpg" {
  export default "" as ImageSourcePropType;
}
declare module "*.png" {
  export default "" as ImageSourcePropType;
}
