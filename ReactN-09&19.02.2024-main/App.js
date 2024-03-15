import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TaskProvider } from './src/context/TaskContext';
import RootNavigation from './src/navigation';

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <RootNavigation />
        </View>
      </NavigationContainer>
    </TaskProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default App;
