import React, { useState } from 'react'; 
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.closeButtonContainer}><Text style={styles.closeButton}>+</Text></TouchableOpacity>
                <Text style={styles.title}>Sign Up</Text>
                <TouchableOpacity style={styles.loginButtonContainer}><Text style={styles.loginButton}>Login</Text></TouchableOpacity>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#BDBDBD"
                />
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
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPassword} >Forgot your password?</Text>
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
        backgroundColor:"white"
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width: "100%",
        paddingHorizontal: 10,
    },
    closeButtonContainer:{
        alignItems:"center",
        flex:1,
    },
    closeButton:{
        fontSize:40,
        color:"#BDBDBD",
        transform: [{ rotate: '45deg' }]
    },
    title:{
        flex:2,
        textAlign:"center",
        fontSize:30,
        lineHeight:36
    },
    loginButtonContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    loginButton:{
        color:"#5DB075",
        fontSize:16,
        lineHeight:19
    },
    form:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        gap:15,
    },
    input:{
        backgroundColor:"#F6F6F6",
        width:343,
        height:50,
        border:1,
        borderColor:"#E8E8E8",
        borderRadius:10,
        paddingLeft: 10,
        fontSize:16,
        paddingRight:10
    },
    label: {
        margin: 8,
    },
    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        width: '100%',
        marginTop: 20,
        marginBottom:20
    },
    forgotPassword: {
        color: '#5DB075',
        fontSize:16,
        lineHeight:19,
    },
    signUpButton:{
        borderRadius:25,
        width:343,
        height:51,
        backgroundColor:"#5DB075",
        alignItems:"center",
        justifyContent:"center"
    },
    signUpButtonText:{
        fontSize:16,
        color:"white",
        lineHeight:19
    }
});

export default SignUpPage;
