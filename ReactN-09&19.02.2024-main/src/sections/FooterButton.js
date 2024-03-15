import React from 'react';
import { StyleSheet, Dimensions, Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const {width} = Dimensions.get('window');

const FooterButton = ({buttonNavigation, buttonText}) => {
    const navigation = useNavigation();
    const handleNavigate = () => navigation.navigate(buttonNavigation);

    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handleNavigate} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: width,
        paddingVertical: 20,
        backgroundColor: '#d5dbef',
        alignItems: "center"
    },
    button: {
        width: (width * 0.9),
        backgroundColor: '#4A3780',
        padding: 12,
        alignItems: "center",
        borderRadius: 50,
    },
    mt30: {
        marginTop: 30
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#d5dbef',
        lineHeight: 30,
    },
});

export default FooterButton;
