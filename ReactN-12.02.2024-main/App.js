import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import ContentScreen from './src/screens/ContentScreen/ContentScreen';

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff"
  }
}

const Tab = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="ContentScreen" component={ContentScreen}/>
          <Tab.Screen name="FeedScreen" component={FeedScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#bfbfbf',
    height: 60,
    paddingTop: 5,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});
