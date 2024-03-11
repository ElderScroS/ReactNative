import React, { useState } from 'react';
import { Dimensions, StyleSheet, Pressable, Text, TextInput, View } from "react-native";
import TaskLayout from "../common/layouts/TaskLayout";
import ListIcon from "../common/icons/ListIcon";
import CalendarIcon from "../common/icons/CalendarIcon";
import TrophyLineIcon from "../common/icons/TrophyLineIcon";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTaskScreen = () => {
    const [title, setTitle] = useState('');

    const [listCategoryActive, setListCategoryActive] = useState(false);
    const [calendarCategoryActive, setCalendarCategoryActive] = useState(false);
    const [trophyLineCategoryActive, setTrophyLineCategoryActive] = useState(false);

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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

    return (
        <TaskLayout
            footerButtonText='Save'
            footerButtonNavigation='ToDoList'
            headerText='Add New Task'
            headerIconType='close'>
            <View style={styles.container}>
                <View style={styles.taskTitleContainer}>
                    <Text style={styles.titleText}>Task title</Text>
                    <TextInput
                        style={styles.titleInput}
                        value={title}
                        onChangeText={handleChangeTitleValue} placeholder='Task title'
                    />
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Category</Text>

                    <View style={styles.categoryBoxContainer}>
                        <Pressable onPress={handleActiveListCategory} style={listCategoryActive ? [styles.iconBoxContainer, styles.active] : styles.iconBoxContainer}>
                            <ListIcon color='#194A66'/>
                        </Pressable>
                        <Pressable onPress={handleActiveCalendarCategory} style={calendarCategoryActive ? [styles.iconBoxContainer, styles.active] : styles.iconBoxContainer}>
                            <CalendarIcon color='#4A3780'/>
                        </Pressable>
                        <Pressable onPress={handleActiveTrophyLineCategory} style={trophyLineCategoryActive ? [styles.iconBoxContainer, styles.active] : styles.iconBoxContainer}>
                            <TrophyLineIcon color='#403100'/>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.dateTimeBoxContainer}>
                    <View style={styles.dateBoxContainer}>
                        <Text style={styles.titleText}>Date</Text>
                        <Pressable onPress={showDatepicker} style={styles.datePickerBox}>
                            <Text>{String(date.getDate()).padStart(2, '0')}.{String(date.getMonth() + 1).padStart(2, '0')}.{date.getFullYear()}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.timeBoxContainer}>
                        <Text style={styles.titleText}>Time</Text>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}
                        <Pressable onPress={showTimepicker} style={styles.timePickerBox}>
                            <Text>{time.getHours()}:{time.getMinutes()}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TaskLayout>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5dbef'
    },
    taskTitleContainer: {
        width: width,
        padding: 15
    },
    titleText: {
        fontSize: 16,
        fontWeight: '500'
    },
    titleInput: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
        fontSize: 18
    },
    categoryContainer: {
        width: width,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '500'
    },
    categoryBoxContainer: {
        marginLeft: 20,
        gap: 10,
        flexDirection: 'row',
    },
    iconBoxContainer: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22,
        borderColor: '#fff',
        borderWidth: 4
    },
    active: {
        borderColor: '#4A3780'
    },
    dateTimeBoxContainer: {
        width: width,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    dateBoxContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    datePickerBox: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
    },
    timeBoxContainer: {
        flex: 1,
        flexDirection: 'column'

    },
    timePickerBox: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
    },
});

export default AddTaskScreen;
