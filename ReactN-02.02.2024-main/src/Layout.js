import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        height: 60,
        backgroundColor: '#5DB075',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
});

export default Layout;
