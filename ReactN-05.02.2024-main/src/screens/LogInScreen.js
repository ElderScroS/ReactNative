import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image } from "react-native";

const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if (email === 'admin@admin.com' && password === 'admin') {
            navigation.navigate('Home');
        } else {
            console.log('Email or Password is incorrect');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Back</Text>
            <Image source={require('../../assets/loginImg.png')} style={styles.image}/>
            <TextInput style={styles.input} placeholder={"Email"} onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.input} placeholder={"Password"} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
            
            <Button title={"Login"} onPress={() => login()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        width: '80%',
        padding: 15,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        borderRadius: 20
    },
    image: {
        width: 300,
        height: 300
    }
});

export default LogInScreen;
