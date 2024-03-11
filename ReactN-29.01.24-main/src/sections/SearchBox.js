import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const SearchBox = () => {
  return (
    <View style={styles.customSearchContainer}>
      <View style={styles.customSearch}></View>
      <Text style={styles.customText}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  customSearchContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  customSearch: {
    backgroundColor: "#CCCCCC",
    width: 343,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#AAAAAA"
  },
  customText: {
    fontSize: 16,
    color: "#888888",
    position: "absolute",
    zIndex: 99,
    left: 35
  }
});

export default SearchBox;
