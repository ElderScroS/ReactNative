import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Linking } from "react-native";

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {
        Linking.openURL(`mailto:support@example.com?subject=Forgot Password`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Log In</Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#BDBDBD"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 5,
        backgroundColor: "white"
    },
    header: {
        justifyContent: "center",
        width: "100%",
        marginTop: 15
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        lineHeight: 36
    },
    form: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#F6F6F6",
        width: 343,
        height: 50,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },
    forgotPassword: {
        color: '#5DB075',
        fontSize: 16,
        fontWeight: "600",
        textDecorationLine: 'underline',
    },
    signUpButton: {
        borderRadius: 25,
        width: 343,
        height: 51,
        backgroundColor: "#5DB075",
        alignItems: "center",
        justifyContent: "center"
    },
    signUpButtonText: {
        fontSize: 16,
        color: "white",
        lineHeight: 19
    }
});

export default LogInPage;
