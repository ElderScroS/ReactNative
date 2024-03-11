import React from 'react';
import { Button, Image, View, StyleSheet, Text } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/homeImg.png')}/>
            <Text style={styles.text}>Gets things done with to do</Text>
            <Text style={styles.lorem}>Lorem ipsum dolor sit amet consectetur. Enim.</Text>
            <Button title={"Get Started"} onPress={() => navigation.navigate('RegisterScreen')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 20,
        height: 40,
        fontWeight: 'poppins',
    },
    lorem: {
        fontSize: 16,
        height: 60,
        textAlign: 'center',
    },
});

export default HomeScreen;
