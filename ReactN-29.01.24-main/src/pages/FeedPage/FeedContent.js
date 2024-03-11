import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import FeedHeader from './FeedHeader';
import SearchBox from '../../sections/SearchBox';
import Message from '../../sections/Message';
import { messages } from '../../data/messages';

const backgroundImg = require('../../../assets/img/skyrim.jpeg')

const FeedContent = () => {
    return (
        <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <FeedHeader/>
                </View>

                <View style={styles.searchContainer}>
                    <SearchBox/>
                </View>
    
                <ScrollView style={styles.feedContainer}>
                    {messages.map((message, index) => (
                    <Message
                        key={index}
                        title={message.title}
                        imageUrl={message.imageUrl}
                        messageText={message.messageText}
                        timeAgo={message.timeAgo}
                    />
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    headerContainer: {
        flex: 1
    },
    searchContainer: {
        flex: 1
    },
    feedContainer: {
        paddingHorizontal: 20,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.9,
    }
});

export default FeedContent;