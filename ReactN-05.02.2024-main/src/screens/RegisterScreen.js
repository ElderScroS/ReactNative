import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const register = () => {
        if (navigation.navigate('LogInScreen')) {
            console.log('Registration successful');
            console.log('Name: ', name);
            console.log('Email: ', email);
            console.log('Password: ', password);
            console.log('Confirm Password: ', confirmPassword);
        } else {
            console.log('Email or Password is incorrect');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Onboard</Text>
            <Text style={styles.text}>Let's help you meet up your tasks.</Text>
            <TextInput style={styles.input} placeholder={"Full Name"} onChangeText={text => setName(name)}/>
            <TextInput style={styles.input} placeholder={"Email Address"} onChangeText={text => setEmail(email)}/>
            <TextInput style={styles.input} placeholder={"Password"} onChangeText={text => setPassword(password)}/>
            <TextInput style={styles.input} placeholder={"Confirm Password"} onChangeText={text => setConfirmPassword(confirmPassword)}/>
            
            <Button title={"Sign Up"} onPress={() => register()}/>
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
    }
});

export default RegisterScreen;
