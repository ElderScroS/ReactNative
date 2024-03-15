import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TaskLayout from '../sections/TaskLayout';
import { useTaskContext } from '../context/TaskContext';

const ToDoListScreen = () => {
    const { tasks, fetchTasks } = useTaskContext();

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <TaskLayout
            headerFooterShown={true}
            footerButtonText='Add Task'
            footerButtonNavigation='AddTask'>
            <View style={styles.container}>
                <View style={styles.emptyContainer}>
                    {tasks.length === 0 ? (
                        <Text style={styles.emptyText}>Empty</Text>
                    ) : (
                        <View></View>
                    )}
                </View>
            </View>
        </TaskLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    emptyContainer: {
        backgroundColor: 'transparent',
        padding: 20,
        borderRadius: 10,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
    },
});

export default ToDoListScreen;
