import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from "../screens/FeedScreen/FeedScreen";
import MarketScreen from "../screens/MarketScreen/MarketScreen";
import ContentScreen from "../screens/ContentScreen/ContentScreen";

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator
              screenOptions={{
                  tabBarShowLabel: false,
                  headerShown: false,
                  tabBarStyle: {
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      elevation: 0,
                      height: 60,
                      backgroundColor: '#fff',
                  },
              }}>
              <Tab.Screen name="Feed" component={FeedScreen}/>
              <Tab.Screen name="Content" component={ContentScreen}/>
              <Tab.Screen name="Market" component={MarketScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default RootNavigation;
