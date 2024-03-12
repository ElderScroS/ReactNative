import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Layout from '../../common/components/Layout';
import StyledTextInput from '../../common/components/StyledTextInput';

const FeedScreen = ({navigation}) => {
    const [search, setSearch] = useState('');

    const messages = [
        { id: '1', user: 'Elvin Suleymanov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Elvin Suleymanov!' },
        { id: '2', user: 'Elvin Suleymanov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Elvin Suleymanov!' },
        { id: '3', user: 'Elvin Suleymanov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Elvin Suleymanov!' },
        { id: '4', user: 'Elvin Suleymanov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Elvin Suleymanov!' },
        { id: '5', user: 'Elvin Suleymanov', avatarUrl: 'https://reactnative.dev/img/tiny_logo.png', text: 'Hello i am Elvin Suleymanov!' },
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

    return (
        <Layout title="Feed">
            <View style={styles.search}>
                <StyledTextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search"
                />
            </View>

            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Message {...item} />}
            />
        </Layout>
    );
};

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
    text: {
        color: "#5DB075",
        fontSize: 20
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
        borderRadius: 20,
        borderColor: '#bfbfbf',
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 20,
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
