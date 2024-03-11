import React from 'react';
import { StyleSheet, Dimensions, View, Text, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CloseButtonIcon from "../common/icons/CloseButtonIcon";
import BackButtonIcon from "../common/icons/BackButtonIcon";

const {width} = Dimensions.get('window');

const Header = ({footerShown,text, navigateTo,iconType}) => {
    const navigation = useNavigation();

    const handleNavigate = () => navigation.navigate(navigateTo);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.iconContainer} onPress={navigateTo}>
                    {iconType === 'back'
                        ? <BackButtonIcon color='#4A3780'/>
                        : iconType === 'close'
                            ? <CloseButtonIcon color='#4A3780'/>
                    : false}
                </Pressable>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
            {footerShown &&
                <View style={styles.footer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>My Todo List</Text>
                    </View>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        marginVertical: 15,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    header: {

    },
    footer: {

    },
    iconContainer: {
        backgroundColor: '#d5dbef',
        width: 40,
        height: 40,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
        position: "absolute",
        left: 15,
    },
    textContainer: {
        width: width,
        alignItems: "center",
        marginVertical: 7
    },
    text: {
        fontSize: 18,
        fontWeight: "400",
        color: '#d5dbef'
    },
    titleContainer: {
        width: width,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 50
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: '#d5dbef'
    },
});

export default Header;
