import * as React from "react"
import Svg, {Path} from "react-native-svg"

const CloseButtonIcon = (props) => {
    const {width, height, color} = props;

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 15}
            height={height ? height : 15}
            fill="none"
            {...props}
        >
            <Path
                stroke={color ? color : "#14142B"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 12.774 12.774M1 13.774 13.774 1"
            />
        </Svg>
    )};

export default CloseButtonIcon;
