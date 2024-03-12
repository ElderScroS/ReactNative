import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {View, StyleSheet} from "react-native";

const CalendarIcon = (props) => {
    const {width, height, color} = props;

    return (
        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 20}
                height={height ? height : 20}
                fill="none"
                {...props}
            >
                <Path
                    fill={color ? color : "#14142B"}
                    d="M15 2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4V0h2v2h6V0h2v2ZM2 8v10h16V8H2Zm2 4h5v4H4v-4Z"
                />
            </Svg>
        </View>
    )};

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#afa7e1',
        width: 40,
        height: 40,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
    },
})


export default CalendarIcon;
