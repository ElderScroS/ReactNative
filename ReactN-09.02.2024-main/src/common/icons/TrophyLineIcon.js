import * as React from "react"
import Svg, {Path} from "react-native-svg"

const BackButtonIcon = (props) => {
    const {width, height, color} = props;

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 8}
            height={height ? height : 14}
            fill="none"
            {...props}
        >
            <Path
                fill={color ? color : "#14142B"}
                d="m2.828 7 4.95 4.95-1.414 1.414L0 7 6.364.636 7.778 2.05 2.828 7Z"
            />
        </Svg>
    )};

export default BackButtonIcon;
