import React from 'react';
import { SafeAreaView, View, StyleSheet } from "react-native";
import FooterButton from "./FooterButton";
import Header from "./Header";

const TaskLayout = ({children, headerFooterShown, headerText, headerNavigate, footerButtonText, footerButtonNavigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.squareContainer}>
                <View style={headerFooterShown ? [styles.squareFirst, styles.topHelper] : styles.squareFirst}></View>
                <View style={styles.squareSecond}></View>
            </View>

            <Header footerShown={headerFooterShown} text={headerText} navigateTo={headerNavigate}/>

            {children}

            <FooterButton buttonText={footerButtonText} buttonNavigation={footerButtonNavigation}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A3780',
        paddingTop: 20,
    },
    squareContainer: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 0,
        left: 10,
    },
    squareFirst: {
        width: 342,
        height: 342,
        position: 'absolute',
        top: -48,
        left: -191,
        borderWidth: 44,
        borderRadius: 171,
        borderColor: '#FFFFFF',
        opacity: 0.1
    },
    topHelper: {
        top: 75
    },
    squareSecond: {
        width: 145,
        height: 145,
        position: 'absolute',
        top: -27,
        left: 327,
        borderWidth: 35,
        borderRadius: 72,
        borderColor: '#FFFFFF',
        opacity: 0.1
    }
});

export default TaskLayout;