import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="SignUpScreen">
            <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUpScreen}/>
            <Stack.Screen options={{headerShown:false}} name="LogIn" component={LogInScreen}/>
            <Stack.Screen options={{headerShown:false}} name="Feed" component={FeedScreen}/>
        </Stack.Navigator>
    );
}

export default RootNavigation;