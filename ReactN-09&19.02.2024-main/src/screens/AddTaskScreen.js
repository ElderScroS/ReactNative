import React, { useState } from 'react';
import { Dimensions, StyleSheet, Pressable, Text, TextInput, View } from 'react-native';
import TaskLayout from '../sections/TaskLayout';
import ListIcon from '../common/ListIcon';
import CalendarIcon from '../common/CalendarIcon';
import TrophyLineIcon from '../common/TrophyLineIcon';
import { useTaskContext } from '../context/TaskContext';

const { width } = Dimensions.get('window');

const AddTaskScreen = () => {
    const [title, setTitle] = useState('');
    const { addTask } = useTaskContext();

    const [listCategoryActive, setListCategoryActive] = useState(false);
    const [calendarCategoryActive, setCalendarCategoryActive] = useState(false);
    const [trophyLineCategoryActive, setTrophyLineCategoryActive] = useState(false);

    const handleActiveListCategory = () => {
        setListCategoryActive(true);
        setCalendarCategoryActive(false);
        setTrophyLineCategoryActive(false);
    };

    const handleActiveCalendarCategory = () => {
        setListCategoryActive(false);
        setCalendarCategoryActive(true);
        setTrophyLineCategoryActive(false);
    };

    const handleActiveTrophyLineCategory = () => {
        setListCategoryActive(false);
        setCalendarCategoryActive(false);
        setTrophyLineCategoryActive(true);
    };

    const handleChangeTitleValue = (text) => setTitle(text);

    const handleSaveButtonPress = () => {
        addTask({ title, completed: false });
    };

    return (
        <TaskLayout
            headerText='Add New Task'
            footerButtonNavigation='ToDoList'
            footerButtonText='Save'>
            <View style={styles.container}>
                <View style={styles.taskTitleContainer}>
                    <Text style={styles.titleText}>Task title</Text>
                    <TextInput
                        style={styles.titleInput}
                        value={title}
                        onChangeText={handleChangeTitleValue}
                        placeholder='Task title'
                    />
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Category</Text>

                    <View style={styles.categoryBoxContainer}>
                        <Pressable
                            onPress={handleActiveListCategory}
                            style={
                                listCategoryActive
                                    ? [styles.iconBoxContainer, styles.active]
                                    : styles.iconBoxContainer
                            }>
                            <ListIcon color='#194A66' />
                        </Pressable>
                        <Pressable
                            onPress={handleActiveCalendarCategory}
                            style={
                                calendarCategoryActive
                                    ? [styles.iconBoxContainer, styles.active]
                                    : styles.iconBoxContainer
                            }>
                            <CalendarIcon color='#4A3780' />
                        </Pressable>
                        <Pressable
                            onPress={handleActiveTrophyLineCategory}
                            style={
                                trophyLineCategoryActive
                                    ? [styles.iconBoxContainer, styles.active]
                                    : styles.iconBoxContainer
                            }>
                            <TrophyLineIcon color='#403100' />
                        </Pressable>
                    </View>
                </View>
            </View>
        </TaskLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5dbef',
    },
    taskTitleContainer: {
        width: width,
        padding: 15,
    },
    titleText: {
        fontSize: 16,
        fontWeight: '500',
    },
    titleInput: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
        fontSize: 18,
    },
    categoryContainer: {
        width: width,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    categoryBoxContainer: {
        marginLeft: 20,
        gap: 10,
        flexDirection: 'row',
    },
    iconBoxContainer: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        borderColor: '#fff',
        borderWidth: 4,
    },
    active: {
        borderColor: '#4A3780',
    },
});

export default AddTaskScreen;
