import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation';
import LogInScreen from './src/screens/LogInScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {isAuthenticated ? <RootNavigation /> : <LogInScreen onLogin={() => setIsAuthenticated(true)} />}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
