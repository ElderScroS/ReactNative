import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Message = ({ title, imageUrl, messageText, timeAgo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.messageText}>{messageText}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeAgo: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
});

export default Message;