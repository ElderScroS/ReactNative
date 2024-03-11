import React from 'react';
import TaskLayout from "../common/layouts/TaskLayout";
import { StyleSheet, View, Text } from "react-native";

const ToDoListScreen = () => {
    const tasks = [];

    return (
        <TaskLayout
            headerFooterShown={true}
            headerText='February 14, 2024'
            headerIconType='back'
            footerButtonText='Add Task'
            footerButtonNavigation='AddTask'>
            <View style={styles.container}>
                {tasks.length === 0 ? (
                    <Text style={styles.emptyText}>Empty</Text>
                ) : (
                    <View>

                    </View>
                )}
            </View>
        </TaskLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#dadada'
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666'
    }
});

export default ToDoListScreen;
