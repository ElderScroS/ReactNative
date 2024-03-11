import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native';
import { messages } from './messages';
import Message from './Message';
import Layout from './Layout';

const ContentPage = () => {
    const [search, setSearch] = useState('');

    return (
        <Layout title="Content">
            <View style={styles.search}>
                <TextInput
                    style={styles.text}
                    placeholder="Search"
                    onChangeText={setSearch}
                    value={search}
                />
            </View>

            <ScrollView>
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        title={message.title}
                        messageText={message.messageText}
                        timeAgo={message.timeAgo}
                    />
                ))}
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    search: {
        padding: 10,
        width: 370,
        height: 50,
        borderRadius: 20,
        borderColor: '#bfbfbf',
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 20,
    },
});

export default ContentPage;
