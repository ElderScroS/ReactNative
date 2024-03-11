import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MarketContent from './src/pages/MarketPage/MarketContent';
import FeedContent from './src/pages/FeedPage/FeedContent';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MarketContent/> */}
      <FeedContent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});







