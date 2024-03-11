import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MarketPage from "./src/MarketPage"
import FeedPage from "./src/FeedPage"
import ContentPage from "./src/ContentPage"
import SignUpPage from "./src/SignUpPage"
import LogInPage from "./src/LogInPage"


export default function App() {
  return (
    <View style={styles.container}>
        {/* <MarketPage/> */}
        {/* <FeedPage/> */}
        {/* <ContentPage/> */}
        <SignUpPage/>
        {/* <LogInPage/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
