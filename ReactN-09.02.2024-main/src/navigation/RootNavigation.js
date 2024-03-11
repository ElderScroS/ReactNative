import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ToDoListScreen from "../screens/ToDoListScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="ToDoListScreen">
            <Stack.Screen options={{headerShown:false}} name="ToDoList" component={ToDoListScreen}/>
            <Stack.Screen options={{headerShown:false}} name="AddTask" component={AddTaskScreen}/>
        </Stack.Navigator>
    );
}

export default RootNavigation;