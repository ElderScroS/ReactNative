import React, {useState} from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from "react-native";
import { messages } from "./messages";
import Message from './Message';

const ContentPage = () => {
    const [search, setSearch] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Back</Text>
                <Text style={styles.contentText}>Content</Text>
                <Text style={styles.text}>Filter</Text>
            </View>
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
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    contentText: {
        fontSize: 20,
    },
    text: {
        color: "#5DB075", 
        fontSize: 20
    },
    header: {
        width: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 80,
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
    },
})

export default ContentPage;
