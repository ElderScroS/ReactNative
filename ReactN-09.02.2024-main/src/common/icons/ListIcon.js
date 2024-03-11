import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {View, StyleSheet} from "react-native";

const ListIcon = (props) => {
    const {width, height, color} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 18}
                height={height ? height : 20}
                fill="none"
                {...props}
            >
                <Path
                    fill={color ? color : "#14142B"}
                    d="M17 20H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V2H2v16h14ZM5 5h8v2H5V5Zm0 4h8v2H5V9Zm0 4h8v2H5v-2Z"
                />
            </Svg>
        </View>

    )};

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#a7cde1',
        width: 40,
        height: 40,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
    },

})


export default ListIcon;
