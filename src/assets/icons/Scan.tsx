import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
      <Path
        d="M60.25 60.25H44V64h20V44h-3.75v16.25zM3.75 3.75H20V0H0v20h3.75V3.75zM44 0v3.75h16.25V20H64V0H44zM3.75 44H0v20h20v-3.75H3.75V44zM13.375 13.375v12.95H8.499v3.75H55.5v-3.75h-4.875v-12.95h-37.25zm3.75 3.75h29.75v9.2h-29.75v-9.2zM13.375 36.905v13.72h37.25v-13.72h-3.75v9.97h-29.75v-9.97h-3.75z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
