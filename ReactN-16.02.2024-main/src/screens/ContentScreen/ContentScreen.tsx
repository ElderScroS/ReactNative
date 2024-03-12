import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { messages } from '../../common/data/messages';
import Message from '../../common/components/Message';
import Layout from '../../common/components/Layout';
import StyledTextInput from '../../common/components/StyledTextInput';
import StyledButton from '../../common/components/StyledButton';

const ContentScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');

    return (
        <Layout title="Content">
            <View style={styles.search}>
                <StyledTextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search"
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
    input: {
        marginBottom: 10,
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
});

export default ContentScreen;