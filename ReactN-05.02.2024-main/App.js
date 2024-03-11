import HomeScreen from "./src/screens/HomeScreen";
import LogInScreen from "./src/screens/LogInScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

