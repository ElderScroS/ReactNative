import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';

const messages = [
    { id: '1', user: 'Mark Nikulov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Mark Nikulov!' },
    { id: '2', user: 'Elvin Suleymanov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Elvin Suleymanov!' },
    // ...
];

const Message = ({ user, avatarUrl, text }) => (
    <View style={styles.messageContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <View>
            <Text>{user}</Text>
            <Text>{text}</Text>
        </View>
    </View>
);

const FeedScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>Back</Text>
            <Text style={styles.text}>Feed</Text>
            <Text style={styles.text}>Filter</Text>
        </View>
        <View style={styles.search}>
            <Text style={styles.text}>Search</Text>
        </View>
        <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Message {...item} />}
        />
    </View>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    feedText: {
        color: "#5DB075",
        fontSize: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 29.05
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    search: {
        padding: 10,
        width: 370,
        height: 50,
        borderRadius: 20,
        borderColor: "#bfbfbf",
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 20,
        alignSelf: "center",
    },
    messageContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
});

export default FeedScreen;
