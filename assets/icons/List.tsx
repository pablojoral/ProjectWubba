import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgList = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="list_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}>
    <Path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M160 144h288M160 256h288M160 368h288"
    />
    <Circle
      cx={80}
      cy={144}
      r={16}
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Circle
      cx={80}
      cy={256}
      r={16}
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Circle
      cx={80}
      cy={368}
      r={16}
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </Svg>
);
export default SvgList;
