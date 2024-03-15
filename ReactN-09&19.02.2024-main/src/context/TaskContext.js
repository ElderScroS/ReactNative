import React, { createContext, useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("todo.db");

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tasks',
        [],
        (_, { rows: { _array } }) => setTasks(_array),
        (error) => console.error('Error fetching tasks', error)
      );
    });
  };

  const addTask = (newTask) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO tasks (title, completed) VALUES (?, ?)',
        [newTask.title, newTask.completed ? 1 : 0],
        () => fetchTasks(),
        (error) => console.error('Error adding task', error)
      );
    });
  };

  const deleteTask = (taskId) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ?',
        [taskId],
        () => fetchTasks(),
        (error) => console.error('Error deleting task', error)
      );
    });
  };

  const toggleTaskCompletion = (taskId, completed) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE tasks SET completed = ? WHERE id = ?',
        [completed ? 1 : 0, taskId],
        () => fetchTasks(),
        (error) => console.error('Error updating task', error)
      );
    });
  };

  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER);"
        );
      },
      null,
      fetchTasks
    );
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}
    >
      {children}
    </TaskContext.Provider>
  );
};
