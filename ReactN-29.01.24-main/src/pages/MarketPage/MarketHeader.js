import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MarketHeader = () => {
  return (
    <View style={styles.customHeader}>
        <Text style={styles.customSide}>
          Back
        </Text>

        <Text style={styles.customContent}>
          Market
        </Text>

        <Text style={styles.customSide}>
          Filter
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    customHeader: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    customSide: {
      color: '#FF5733',
      fontSize: 16,
      fontWeight: '500'
    },
    customContent: {
      color: '#1E272E',
      fontSize: 30,
      fontWeight: '600',
      fontStyle: "italic",
    },
});

export default MarketHeader;
